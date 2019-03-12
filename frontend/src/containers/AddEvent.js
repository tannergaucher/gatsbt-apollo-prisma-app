import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import FAB from '../components/styles/FAB'
import { CURRENT_USER_QUERY } from '../containers/User'

const ADD_EVENT_MUTATION = gql`
  mutation ADD_EVENT_MUTATION($postId: Int!) {
    addEvent(postId: $postId) {
      postId
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  data.me.events = [...data.me.events, ...payload.data.addEvent]
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

const AddEvent = ({ postId }) => {
  return (
    <Mutation
      mutation={ADD_EVENT_MUTATION}
      variables={{ postId }}
      update={update}
      optimisticResponse={{
        __typename: 'Mutation',
        addEvent: {
          __typename: 'Event',
          postId: postId,
          id: new Date(),
        },
      }}
    >
      {addEvent => <FAB onClick={addEvent}>&#43;</FAB>}
    </Mutation>
  )
}

export default AddEvent
