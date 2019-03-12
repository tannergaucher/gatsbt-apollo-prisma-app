import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import User from '../containers/User'
import RemoveEvent from '../containers/RemoveEvent'
import AddEvent from '../containers/AddEvent'

const Styled = styled.div`
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: ${props => props.theme.radius};
  margin-bottom: 4em;
  position: relative;

  h2 {
    position: absolute;
    z-index: 2;
    padding-left: ${props => props.theme.spacing};
    color: white;
  }

  .test {
    position: absolute;
    bottom: 5%;
    right: 2%;
  }
`

const Image = styled(Img)`
  height: 250px;
  filter: brightness(0.8);
  border-radius: ${props => props.theme.radius};
`

const Card = ({ title, fluid, postId, slug }) => {
  return (
    <Styled>
      <Link to={slug}>
        <h2>{title}</h2>
        <Image fluid={fluid} />
      </Link>
      <div className="test">
        <ToggledMutation postId={postId} />
      </div>
    </Styled>
  )
}

export default Card

const ToggledMutation = ({ postId }) => {
  return (
    <User>
      {({ data, loading }) => {
        if (loading) return null
        if (!data.me) return null

        const { events } = data.me
        const isGoing = events.filter(event => {
          return event.postId === postId
        })
        // prettier-ignore
        return isGoing.length > 0 ? <RemoveEvent  postId={postId}/> : <AddEvent postId={postId} />
      }}
    </User>
  )
}
