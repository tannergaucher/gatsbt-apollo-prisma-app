import React from 'react'
import Link from 'gatsby-link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import AddEvent from '../components/AddEvent'
import RemoveEvent from '../components/RemoveEvent'

const IS_GOING_QUERY = gql`
  query IS_GOING_QUERY($eventId: Int!) {
    isGoing(eventId: $eventId)
  }
`

const Event = ({ title, slug, eventId }) => (
  <Query query={IS_GOING_QUERY} variables={{ eventId }}>
    {({ data: { isGoing }, loading, error }) => (
      <div>
        <h2>{title}</h2>
        {isGoing ? (
          <RemoveEvent eventId={eventId} />
        ) : (
          <AddEvent eventId={eventId} />
        )}
        <br />
        <Link to={slug}>View Event Page</Link>
      </div>
    )}
  </Query>
)

export default Event
export { IS_GOING_QUERY }
