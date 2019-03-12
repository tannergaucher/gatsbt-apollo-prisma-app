import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Event {
    isGoing: Boolean!
  }
`

export const resolvers = {
  Mutation: {},
  Query: {},
  Event: {
    isGoing: () => {
      // return data.me.events.includes(postId)
    },
  },
}
