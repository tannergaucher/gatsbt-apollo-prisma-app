import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($eventId: Int!) {
    removeEvent(eventId: $eventId) {
      id
    }
  }
`

const update = (cache, payload) => {
  console.log('update func')
}

const RemoveEvent = ({ eventId }) => {
  return (
    <Mutation mutation={REMOVE_EVENT_MUTATION} variables={{ eventId }}>
      {removeEvent => <button onClick={removeEvent}>Remove</button>}
    </Mutation>
  )
}

export default RemoveEvent
