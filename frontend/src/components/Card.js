import React from 'react'

import { Card, Heading } from 'rebass'
import Img from 'gatsby-image'

const MyCard = ({ title, fluid, eventId }) => (
  <Card
    fontSize={[4]}
    fontWeight="bold"
    width={1}
    p={3}
    my={5}
    bg="#f6f6ff"
    borderRadius={8}
    boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
  >
    <Heading mb={3}>{title}</Heading>
    <Img fluid={fluid} style={{ height: '250px' }} />
  </Card>
)

export default MyCard
