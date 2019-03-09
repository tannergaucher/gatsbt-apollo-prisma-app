import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import FAB from '../components/styles/FAB'
import { CURRENT_USER_QUERY } from '../containers/User'

const REMOVE_EVENT_MUTATION = gql`
  mutation REMOVE_EVENT_MUTATION($nodeId: String!) {
    removeEvent(nodeId: $nodeId) {
      nodeId
    }
  }
`

const update = (cache, payload) => {
  const data = cache.readQuery({ query: CURRENT_USER_QUERY })
  const payloadId = payload.data.removeEvent.nodeId
  data.me.events = data.me.events.filter(event => event.nodeId !== payloadId)
  cache.writeQuery({ query: CURRENT_USER_QUERY, data })
}

const RemoveEvent = ({ nodeId }) => {
  return (
    <Mutation
      mutation={REMOVE_EVENT_MUTATION}
      variables={{ nodeId }}
      update={update}
      optimisticResponse={{
        __typename: 'Mutation',
        removeEvent: {
          __typename: 'Event',
          nodeId: nodeId,
        },
      }}
    >
      {removeEvent => (
        <FAB onClick={removeEvent}>
          <strong> &#215; </strong>
        </FAB>
      )}
    </Mutation>
  )
}

export default RemoveEvent
