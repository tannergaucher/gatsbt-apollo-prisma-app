import React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'
import { Box } from 'rebass'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <FilterLinks />
      {edges.map(edge => {
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
        return (
          <Box my={4}>
            <Link to={slug} key={id} none="true">
              <Card title={title} fluid={fluid} />
            </Link>
          </Box>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query eventsQuery {
    allMarkdownRemark {
      edges {
        node {
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
