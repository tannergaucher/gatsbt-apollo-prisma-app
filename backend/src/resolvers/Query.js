const { getUserId } = require('../utils/getUserId')

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
      throw new Error(`You must be logged in for that`)
    }

    return context.prisma.user({ id: userId }).events()
  },
  // query the users on a given event
}

module.exports = {
  Query,
}
