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

function getUrl(filter) {
  if (filter === 'All') {
    return '/'
  }
  return filter
}

const FilterLink = ({ filter }) => (
  <Query query={ACTIVE_FILTER_QUERY}>
    {({ data, client }) => {
      return (
        <Link
          to={`/${kebabCase(getUrl(filter))}`}
          mr={3}
          onClick={() => {
            client.writeData({ data: { filterLink: filter } })
          }}
          active={filter === data.filterLink}
        >
          <strong>{filter}</strong>
        </Link>
      )
    }}
  </Query>
)

export default FilterLink
