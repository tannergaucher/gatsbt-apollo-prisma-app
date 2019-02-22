import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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
      update={update}
      refetchQueries={[{ query: MY_EVENTS_QUERY }]}
    >
      {addEvent => <button onClick={addEvent}>Add</button>}
    </Mutation>
  )
}

export default AddEvent
