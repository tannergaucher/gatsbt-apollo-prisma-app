import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import User from '../containers/User'
import PleaseSignin from '../containers/PleaseSignin'

const myEvents = ({ data }) => {
  const allEvents = data.allMarkdownRemark.edges
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            if (!data.me) return <p>No data.me</p>

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

            // 3. map user event nodes to card components
            return isUserEventNode.map(userEvent => (
              <>
                <Link to={userEvent.node.fields.slug} key={userEvent.node.id}>
                  <h1>{userEvent.node.frontmatter.title}</h1>
                </Link>
              </>
            ))
          }}
        </User>
      </PleaseSignin>
    </Layout>
  )
}

export default myEvents

export const myEventsQuery = graphql`
  query myEventsQuery {
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
          }
        }
      }
    }
  }
`
