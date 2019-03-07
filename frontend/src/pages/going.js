import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'rebass'

import Layout from '../components/layout'
import User from '../containers/User'
import PleaseSignin from '../containers/PleaseSignin'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'
import RemoveEvent from '../containers/RemoveEvent'

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
                      id: eventId,
                      featuredImage: {
                        childImageSharp: { fluid },
                      },
                    },
                  } = userEvent.node
                  return (
                    <Box my={4}>
                      <Link to={slug} key={id} none="true">
                        <Card title={title} fluid={fluid} />
                      </Link>
                      <RemoveEvent eventId={eventId} />
                    </Box>
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
