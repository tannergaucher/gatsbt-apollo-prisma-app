import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import FAB from '../components/styles/FAB'
import { CURRENT_USER_QUERY } from '../containers/User'

const ADD_EVENT_MUTATION = gql`
  mutation ADD_EVENT_MUTATION($nodeId: String!) {
    addEvent(nodeId: $nodeId) {
      nodeId
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  data.me.events = [...data.me.events, ...payload.data.addEvent]
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

const AddEvent = ({ nodeId }) => {
  return (
    <Mutation
      mutation={ADD_EVENT_MUTATION}
      variables={{ nodeId }}
      update={update}
      optimisticResponse={{
        __typename: 'Mutation',
        addEvent: {
          __typename: 'Event',
          nodeId: nodeId,
          // gets replaced by actual id on server response
          id: new Date(),
        },
      }}
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
