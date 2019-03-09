import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import { Heading, Box } from 'rebass'

const event = ({ data }) => {
  const {
    frontmatter: {
      title,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <Heading fontSize={[5, 6, 7]} mt={4} mb={4}>
        {title}
      </Heading>
      <Img fluid={fluid} />

      <Box
        fontSize={[3, 4]}
        dangerouslySetInnerHTML={{ __html: html }}
        mt={5}
        mb={4}
      />
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
