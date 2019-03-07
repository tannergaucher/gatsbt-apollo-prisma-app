import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from 'rebass'

const ADD_EVENT_MUTATION = gql`
  mutation ADD_EVENT_MUTATION($eventId: Int!) {
    addEvent(eventId: $eventId) {
      id
    }
  }
`

const update = (cache, payload) => {
  console.log('update fun')
}

const AddEvent = ({ eventId }) => {
  return (
    <Mutation
      mutation={ADD_EVENT_MUTATION}
      variables={{ eventId }}
      update={update}
    >
      {addEvent => <Button onClick={addEvent}>+</Button>}
    </Mutation>
  )
}

export default AddEvent
