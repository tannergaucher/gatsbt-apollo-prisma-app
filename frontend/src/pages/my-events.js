import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

import PleaseSignIn from '../components/PleaseSignIn'
import Layout from '../components/layout'

const MY_EVENTS_QUERY = gql`
  query MY_EVENTS_QUERY {
    events {
      eventId
    }
  }
`

const myEvents = ({ data }) => {
  const allEvents = data.allMarkdownRemark.edges
  return (
    <PleaseSignIn>
      <Layout>
        <Query query={MY_EVENTS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>

            // 1. push user eventIds to an array
            const { events } = data
            const eventIds = []
            events.map(event => eventIds.push(event.eventId))

            // 2. map all events from page query, if userEventsArray.indexOf event !== -1, push to isUserEventNode array
            const isUserEventNode = []
            allEvents.map(edge => {
              if (eventIds.indexOf(edge.node.frontmatter.id) !== -1) {
                isUserEventNode.push(edge)
              }
            })

            // 3. map user event nodes to card components
            return isUserEventNode.map(userEvent => (
              <Link to={userEvent.node.fields.slug} key={userEvent.node.id}>
                <h1>{userEvent.node.frontmatter.title}</h1>
              </Link>
            ))
          }}
        </Query>
      </Layout>
    </PleaseSignIn>
  )
}

export default myEvents

export { MY_EVENTS_QUERY }

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
