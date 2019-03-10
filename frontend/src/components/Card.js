import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const Styled = styled.div`
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  position: relative;
  border-radius: ${props => props.theme.radius};

  h2 {
    position: absolute;
    z-index: 2;
    padding-left: ${props => props.theme.spacing};
    color: white;
  }
`

const Card = ({ title, fluid }) => (
  <Styled>
    <h2>{title}</h2>
    <Img
      fluid={fluid}
      style={{
        height: '250px',
        filter: 'brightness(.8)',
        borderRadius: '4px',
      }}
    />
  </Styled>
)

export default Card
