const cookieParser = require('cookie-parser')
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')

require('dotenv').config()

const createServer = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

const server = createServer

server.express.use(cookieParser())

server.express.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL_PRODUCTION,
    },
  },
  details => {
    console.log(`Server is running on http://localhost:${details.port}`)
  }
)
