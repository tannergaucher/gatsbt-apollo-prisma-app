import React from 'react'
import Link from 'gatsby-link'

import AddEvent from '../containers/AddEvent'
import RemoveEvent from '../containers/RemoveEvent'

const isGoing = false

const Event = ({ title, slug, eventId }) => (
  <div>
    <h2>{title}</h2>
    {isGoing ? (
      <RemoveEvent eventId={eventId} />
    ) : (
      <AddEvent eventId={eventId} />
    )}
    <br />
    <Link to={slug}>View Event Page</Link>
  </div>
)

export default Event
