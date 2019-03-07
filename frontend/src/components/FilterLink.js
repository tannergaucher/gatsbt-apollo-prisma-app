import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { kebabCase } from 'lodash'

import Link from '../components/styles/Link'

const ACTIVE_FILTER_QUERY = gql`
  query {
    filterLink @client
  }
`

function isActive(filter, filterFromCache) {
  return filter === filterFromCache
}

function getUrl(filter) {
  if (filter === 'All') {
    return '/'
  }
  return filter
}

const FilterLink = ({ filter }) => (
  <Query query={ACTIVE_FILTER_QUERY}>
    {({ data, loading, client }) => {
      if (loading) return null

      return (
        <Link
          to={`/${kebabCase(getUrl(filter))}`}
          mr={3}
          onClick={() => {
            client.writeData({ data: { filterLink: filter } })
          }}
          active={isActive(filter, data.filterLink)}
          style={{ fontWeight: 'bold' }}
        >
          {filter}
        </Link>
      )
    }}
  </Query>
)

export default FilterLink
