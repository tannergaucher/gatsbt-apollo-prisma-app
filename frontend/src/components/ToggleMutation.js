import React from 'react'
import User from '../containers/User'
import RemoveEvent from '../containers/RemoveEvent'
import AddEvent from '../containers/AddEvent'
import Button from '../components/styles/Button'

const ToggledMutation = ({ postId }) => {
  return (
    <User>
      {({ data, loading }) => {
        if (loading) {
          return (
            <Button disabled={true} color="lightgrey">
              GO
            </Button>
          )
        }
        if (!data) return null
        if (!data.me) return null

        const { events } = data.me
        const isGoing = events.filter(event => {
          return event.postId === postId
        })

        return data &&
          data.me &&
          // prettier-ignore
          isGoing.length > 0 ? (
          <RemoveEvent postId={postId} />
        ) : (
          <AddEvent postId={postId} />
        )
      }}
    </User>
  )
}

export default ToggledMutation
