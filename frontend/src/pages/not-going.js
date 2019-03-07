import React from 'react'

import Layout from '../components/layout'
import PleaseSignin from '../containers/PleaseSignin'
import User from '../containers/User'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'

import AddEvent from '../containers/AddEvent'
import { Box } from 'rebass'

const notGoing = ({ data }) => {
  const allEvents = data.allMarkdownRemark.edges
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            if (!data.me) return <p>no data.me</p>

            const { events } = data.me

            // todo: abstract to notUserEvents util func

            const eventIds = []
            events.map(event => eventIds.push(event.eventId))

            const isNotUserEventNode = []
            allEvents.map(edge => {
              const { id } = edge.node.frontmatter
              if (eventIds.indexOf(id) === -1) {
                isNotUserEventNode.push(edge)
              }
            })

            return (
              <>
                <FilterLinks />
                {isNotUserEventNode.map(notUserEvent => {
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
                  } = notUserEvent.node

                  return (
                    <Box css={{ position: 'relative' }} my={4}>
                      <Link to={slug} key={id} none="true">
                        <Card title={title} fluid={fluid} />
                      </Link>
                      <AddEvent eventId={eventId} />
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

export default notGoing

export const notGoingQuery = graphql`
  query notGoingQuery {
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
