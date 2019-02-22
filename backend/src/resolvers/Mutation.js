const { hash, compare } = require('bcrypt')
const { sign, verify } = require('jsonwebtoken')

const APP_SECRET = 'appsecret321'

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, APP_SECRET)

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

    const token = sign({ userId: user.id }, APP_SECRET)

    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    console.log(token)

    return {
      token,
      user,
    }
  },
  signout: (parent, { id }, context) => {
    context.response.clearCookie('token')
    return { message: 'Goodbye' }
  },

  addEvent: async (parent, { eventId }, context) => {
    const { token } = context.request.cookies
    if (!token) {
      return null
    }

    const userId = verify(token, APP_SECRET).userId

    if (!userId) {
      throw new Error(`You must be logged in for that`)
    }

    // update related nodes type User and Type Event
    return context.prisma.updateUser({
      where: {
        id: userId,
      },
      data: {
        events: {
          create: [
            {
              eventId,
            },
          ],
        },
      },
    })
  },

  removeEvent: async (parent, { eventId }, context) => {
    const { token } = context.request.cookies
    if (!token) {
      return null
    }

    const userId = verify(token, APP_SECRET).userId

    if (!userId) {
      return null
    }

    const [existingEvent] = await context.prisma
      .user({ id: userId })
      .events({ where: { eventId } })

    if (!existingEvent) {
      return null
    }

    if (existingEvent) {
      return context.prisma.updateUser({
        where: {
          id: userId,
        },
        data: {
          events: {
            delete: [
              {
                id: existingEvent.id,
              },
            ],
          },
        },
      })
    }
  },
}

module.exports = {
  Mutation,
}
