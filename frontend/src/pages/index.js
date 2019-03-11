import React from 'react'
import { Query } from 'react-apollo'

import Layout from '../components/layout'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'
import WithBadge from '../components/styles/WithBadge'
import AddEvent from '../containers/AddEvent'
import RemoveEvent from '../containers/RemoveEvent'
import { CURRENT_USER_QUERY } from '../containers/User'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: allEvents },
  },
}) => {
  return (
    <Layout>
      <FilterLinks />

      {allEvents.map(edge => {
        const {
          node: {
            id,
            frontmatter: {
              title,
              featuredImage: {
                childImageSharp: { fluid },
              },
            },
            fields: { slug },
          },
        } = edge
        // Decide if a person is going here

        return (
          <WithBadge key={id}>
            <Link to={slug} none="true">
              <Card title={title} fluid={fluid} />
            </Link>

            {/* if the user is going, display <RemoveEvent className="absolute"/ > */}
            {/* if the user isn't going, display <AddEvent className="absolute"/ > */}
          </WithBadge>
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
          id
          fields {
            slug
          }
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
    }
  }
`
