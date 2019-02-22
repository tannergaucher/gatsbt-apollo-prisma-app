import React from 'react'
import Link from 'gatsby-link'

import AddEvent from '../components/AddEvent'
import RemoveEvent from '../components/RemoveEvent'

const isGoing = false

const Event = ({ title, slug, eventId }) => (
  <>
    <h2>{title}</h2>
    {isGoing ? (
      <RemoveEvent eventId={eventId} />
    ) : (
      <AddEvent eventId={eventId} />
    )}
    <br />
    <Link to={slug}>View Event Page</Link>
  </>
)

export default Event
