import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { CURRENT_USER_QUERY } from '../containers/User'
import Button from '../components/styles/Button'

const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($postId: Int!) {
    removeEvent(postId: $postId) {
      postId
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  const payloadId = payload.data.removeEvent.postId
  data.me.events = data.me.events.filter(event => event.postId !== payloadId)
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

const RemoveEvent = ({ postId }) => {
  return (
    <Mutation
      mutation={REMOVE_EVENT_MUTATION}
      variables={{ postId }}
      update={update}
      optimisticResponse={{
        __typename: 'Mutation',
        removeEvent: {
          __typename: 'Event',
          postId: postId,
        },
      }}
    >
      {removeEvent => <Button onClick={removeEvent}>GOING</Button>}
    </Mutation>
  )
}

export default RemoveEvent
