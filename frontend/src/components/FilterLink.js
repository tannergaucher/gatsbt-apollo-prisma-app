import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { kebabCase } from 'lodash'
import styled from 'styled-components'
import { Location } from '@reach/router'

import Link from '../components/styles/Link'

const Filter = styled.h4`
  padding: 0.5em;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.02em;
`

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

// get location from router
// set pathname to cache
// pathtoFilter(){}

const FilterLink = ({ filter }) => (
  <Query query={ACTIVE_FILTER_QUERY}>
    {({ data, client }) => {
      return (
        <Location>
          {({ location }) => {
            return (
              <Link
                to={`/${kebabCase(getUrl(filter))}`}
                onClick={() => {
                  client.writeData({ data: { filterLink: filter } })
                }}
                active={filter === data.filterLink}
              >
                <Filter>{filter}</Filter>
              </Link>
            )
          }}
        </Location>
      )
    }}
  </Query>
)

export default FilterLink
