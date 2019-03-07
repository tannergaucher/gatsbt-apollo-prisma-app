import React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'

import { kebabCase } from 'lodash'

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
          <Link to={slug} key={id} none="true">
            <Card title={title} fluid={fluid} />
          </Link>
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
