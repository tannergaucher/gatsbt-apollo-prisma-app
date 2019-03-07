import React from 'react'

import { Card, Heading } from 'rebass'
import Img from 'gatsby-image'

const MyCard = ({ title, fluid, eventId }) => (
  <Card
    fontSize={[4]}
    fontWeight="bold"
    width={1}
    bg="#f6f6ff"
    boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    css={{ position: 'relative' }}
  >
    <Heading
      pl={3}
      pb={3}
      css={{ position: 'absolute', bottom: 0, zIndex: '3', color: 'white' }}
    >
      {title}
    </Heading>
    <Img
      fluid={fluid}
      style={{
        height: '280px',
        filter: 'brightness(.8)',
        borderRadius: '4px',
      }}
    />
  </Card>
)

export default MyCard
