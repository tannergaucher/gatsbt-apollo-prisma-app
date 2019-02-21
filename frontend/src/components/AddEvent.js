import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { IS_GOING_QUERY } from './Event'
import { MY_EVENTS_QUERY } from '../pages/events'

const ADD_EVENT_MUTATION = gql`
  mutation ADD_EVENT_MUTATION($eventId: Int!) {
    addEvent(eventId: $eventId) {
      id
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: MY_EVENTS_QUERY })
  console.log('data', data)
  console.log('payload', payload)
}

const AddEvent = ({ eventId }) => {
  return (
    <Mutation
      mutation={ADD_EVENT_MUTATION}
      variables={{ eventId }}
      // optimisticResponse={{
      //   __typename: 'Mutation',
      //   addEvent: {
      //     __typename: 'User',
      //     content: eventId,
      //     id: new Date(),
      //   },
      // }}
      update={update}
      refetchQueries={[
        { query: IS_GOING_QUERY, variables: { eventId } },
        { query: MY_EVENTS_QUERY },
      ]}
    >
      {addEvent => <button onClick={addEvent}>Add</button>}
    </Mutation>
  )
}

export default AddEvent
