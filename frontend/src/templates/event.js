import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Box } from 'rebass'

import Layout from '../components/layout'
import ToggleMutation from '../components/ToggleMutation'
import Container from '../components/styles/Container'

const event = ({ data }) => {
  const {
    frontmatter: {
      title,
      id,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <Container>
        <Heading fontSize={[5, 6, 7]} mt={4} mb={4}>
          {title}
        </Heading>
        <Img fluid={fluid} />

        <ToggleMutation postId={id} />
        <Box
          fontSize={[3, 4]}
          dangerouslySetInnerHTML={{ __html: html }}
          mt={5}
          mb={4}
        />
      </Container>
    </Layout>
  )
}

export default event

export const eventPageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        id
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
