const { verify } = require('jsonwebtoken')
const APP_SECRET = 'appsecret321'

const Query = {
  me: async (parent, args, context) => {
    const { token } = context.request.cookies
    if (!token) {
      return null
    }

    const userId = verify(token, APP_SECRET).userId

    if (!userId) {
      return null
    }
    const user = await context.prisma.user({ id: userId })

    return user
  },

  events: async (parent, args, context) => {
    const { token } = context.request.cookies
    if (!token) {
      return null
    }

    const userId = verify(token, APP_SECRET).userId

    if (!userId) {
      throw new Error(`You must be logged in for that`)
    }

    // error:  cannot return null?
    return context.prisma.user({ id: userId }).events()
  },

  isGoing: async (parent, { eventId }, context) => {
    const { token } = context.request.cookies
    if (!token) {
      return null
    }

    const userId = verify(token, APP_SECRET).userId

    if (!userId) {
      return null
    }

    const [isGoingToEvent] = await context.prisma
      .user({ id: userId })
      .events({ where: { eventId } })

    if (isGoingToEvent) {
      return true
    }

    if (!isGoingToEvent) {
      return false
    }
  },
}

module.exports = {
  Query,
}
