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
      throw new Error('You must be logged in')
    }

    return {
      events: context.prism.user({ id: userId }).events(),
    }
  },
}

module.exports = {
  Query,
}
