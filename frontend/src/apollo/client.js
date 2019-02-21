import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import fetch from 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'

const link = createHttpLink({
  uri: 'http://localhost:4000',
  credentials: 'include',
})

export const client = new ApolloClient({
  fetch,
  link,
  cache: new InMemoryCache(),
})
