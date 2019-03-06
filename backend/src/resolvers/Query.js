const { getUserId, AuthError } = require('../utils/getUserId')

const Query = {
  me: async (parent, args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return {
      user: await context.prisma.user({ id: userId }),
    }
  },

  events: async (parent, args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    return context.prisma.user({ id: userId }).events()
  },
}

module.exports = {
  Query,
}
