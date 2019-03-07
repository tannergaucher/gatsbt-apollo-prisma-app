import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import User from '../containers/User'
import PleaseSignin from '../containers/PleaseSignin'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'

const going = ({ data }) => {
  const allEvents = data.allMarkdownRemark.edges
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            if (!data.me) return <p>No data.me</p>

            // TODO: abstract to util function

            // 1. push user eventIds to an array
            const { events } = data.me
            const eventIds = []
            events.map(event => eventIds.push(event.eventId))

            // 2. map all events from page query, if user has that event, push it to array
            const isUserEventNode = []
            allEvents.map(edge => {
              const { id } = edge.node.frontmatter
              if (eventIds.indexOf(id) !== -1) {
                isUserEventNode.push(edge)
              }
            })

            return (
              <>
                <FilterLinks />
                {isUserEventNode.map(userEvent => {
                  const {
                    id,
                    fields: { slug },
                    frontmatter: {
                      title,
                      featuredImage: {
                        childImageSharp: { fluid },
                      },
                    },
                  } = userEvent.node
                  return (
                    <Link to={slug} key={id}>
                      <Card title={title} fluid={fluid} />
                    </Link>
                  )
                })}
              </>
            )
          }}
        </User>
      </PleaseSignin>
    </Layout>
  )
}

export default going

export const goingQuery = graphql`
  query goingQuery {
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
