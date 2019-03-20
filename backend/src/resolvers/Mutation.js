const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const { getUserId, AuthError } = require('../utils/getUserId')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)

    const existingUser = await context.prisma.user({ email })

    if (existingUser) throw new Error(`Account already exists for that email`)

    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    return {
      token,
      user,
    }
  },
  signin: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })

    if (!user) {
      throw new Error(`No user found for this email`)
    }

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error(`Invalid Password`)
    }

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    return {
      token,
      user,
    }
  },
  signout: (parent, args, context) => {
    context.response.clearCookie('token')
    return { message: 'Goodbye' }
  },
  addEvent: async (parent, { postId }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const [existingEvent] = await context.prisma.user({ id: userId }).events({
      where: {
        postId: postId,
      },
    })

    if (existingEvent) {
      throw new Error(`Already going to this event`)
    }

    const event = await context.prisma.createEvent({
      postId: postId,
      user: {
        connect: {
          id: userId,
        },
      },
    })

    return event
  },

  removeEvent: async (parent, { postId }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const [existingEvent] = await context.prisma.user({ id: userId }).events({
      where: {
        postId: postId,
      },
    })

    if (!existingEvent) {
      throw new Error(`No event there`)
    }

    return context.prisma.deleteEvent({
      id: existingEvent.id,
    })
  },
}

module.exports = {
  Mutation,
}
