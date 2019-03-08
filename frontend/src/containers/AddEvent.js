import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import FAB from '../components/styles/FAB'
import { CURRENT_USER_QUERY } from './User'

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
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      update={update}
    >
      {addEvent => (
        <FAB onClick={addEvent}>
          <strong>&#43;</strong>
        </FAB>
      )}
    </Mutation>
  )
}

export default AddEvent
