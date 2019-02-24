const Event = {
  users: ({ eventId }, args, context) => {
    return context.prisma.event({ eventId }).users()
  },
}

module.exports = {
  Event,
}
