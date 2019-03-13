import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Heading } from 'rebass'

import ToggledMutation from '../components/ToggleMutation'

const Styled = styled.div`
  position: relative;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: ${props => props.theme.radius};
  margin-bottom: 4em;

  &:last-child {
    margin-bottom: 0;
  }

  .title {
    position: absolute;
    z-index: 2;
    color: white;
    top: 0.5em;
    left: 0.5em;
  }

  .mutation {
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
  }
`

const Image = styled(Img)`
  height: 250px;
  filter: brightness(0.75);
  border-radius: ${props => props.theme.radius};
`

const Card = ({ title, fluid, postId, slug }) => {
  return (
    <Styled>
      <Link to={slug}>
        <Heading className="title" fontSize={5}>
          {title}
        </Heading>
        <Image fluid={fluid} />
      </Link>
      <div className="mutation">
        <ToggledMutation postId={postId} />
      </div>
    </Styled>
  )
}

export default Card
