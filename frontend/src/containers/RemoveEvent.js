import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Button } from 'rebass'

const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($eventId: Int!) {
    removeEvent(eventId: $eventId) {
      id
    }
  }
`

const RemoveEvent = ({ eventId }) => {
  return (
    <Mutation mutation={REMOVE_EVENT_MUTATION} variables={{ eventId }}>
      {removeEvent => <Button onClick={removeEvent}> - </Button>}
    </Mutation>
  )
}

export default RemoveEvent
