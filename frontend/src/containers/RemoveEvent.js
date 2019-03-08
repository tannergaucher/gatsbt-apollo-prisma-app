import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import FAB from '../components/styles/FAB'

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
      {removeEvent => (
        <FAB onClick={removeEvent}>
          <strong> &#215; </strong>
        </FAB>
      )}
    </Mutation>
  )
}

export default RemoveEvent
