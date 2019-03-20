import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Card from '../components/Card'
import Container from '../components/styles/Container'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: allEvents },
  },
}) => (
  <Layout>
    <Container>
      {allEvents.map(edge => {
        const {
          node: {
            frontmatter: {
              title,
              id,
              featuredImage: {
                childImageSharp: { fluid },
              },
            },
            fields: { slug },
          },
        } = edge
        // prettier-ignore
        return <Card title={title} fluid={fluid} postId={id} slug={slug} key={id} />
      })}
    </Container>
  </Layout>
)

export default IndexPage

export const indexPageQuery = graphql`
  query eventsQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
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
    }
  }
`
