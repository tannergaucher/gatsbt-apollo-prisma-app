const User = {
  events: ({ id }, args, context) => {
    return context.prisma.user({ id }).events()
  },
}

module.exports = {
  User,
}
