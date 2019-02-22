import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import fetch from 'isomorphic-fetch'
import { HttpLink } from 'apollo-link-http'

const link = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'include',
})

export const client = new ApolloClient({
  fetch,
  link,
  cache: new InMemoryCache(),
  clientState: {
    resolvers: {
      Mutation: {},
      Query: {},
    },
    data: {
      isLoggedIn: false,
    },
  },
})
