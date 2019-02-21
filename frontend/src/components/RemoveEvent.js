import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { IS_GOING_QUERY } from './Event'
import { MY_EVENTS_QUERY } from '../pages/events'

const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($eventId: Int!) {
    removeEvent(eventId: $eventId) {
      id
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: IS_GOING_QUERY })
  console.log('data', data)
  console.log('payload', payload)
}

const RemoveEvent = ({ eventId }) => {
  return (
    <Mutation
      mutation={REMOVE_EVENT_MUTATION}
      variables={{ eventId }}
      update={update}
      // refetchQueries={[
      //   { query: IS_GOING_QUERY, variables: { eventId } },
      //   { query: MY_EVENTS_QUERY },
      // ]}
    >
      {removeEvent => <button onClick={removeEvent}>Remove</button>}
    </Mutation>
  )
}

export default RemoveEvent
