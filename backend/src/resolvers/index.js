const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Event } = require('./Event')

const resolvers = {
  Query,
  Mutation,
  User,
  Event,
}

module.exports = {
  resolvers,
}
