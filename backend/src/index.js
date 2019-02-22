const cookieParser = require('cookie-parser')
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')

require('dotenv').config()

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.express.use(cookieParser())

server.start(
  {
    cors: {
      credentials: true,
      origin: 'http://localhost:8000',
    },
  },

  () => console.log(`server is now running on port http://localhost:4000`)
)
