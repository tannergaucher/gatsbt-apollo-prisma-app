import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const MY_EVENTS_QUERY = gql`
  query MY_EVENTS_QUERY {
    events {
      eventId
    }
  }
`

const event = ({ data, pageContext }) => {
  console.log(pageContext)

  return (
    <Layout>
      <Query query={MY_EVENTS_QUERY}>
        {({ data, loading, error }) => {
          //transform returned data into  1D array of events
          const dynamicEventIDs = [1, 3]

          if (loading) return <p>loading...</p>
          if (error) return <p>{error.message}</p>

          return (
            <StaticQuery
              query={graphql`
                query EventsFromApollo {
                  allMarkdownRemark(
                    filter: { frontmatter: { id: { in: [0, 1, 2, 3, 4] } } }
                  ) {
                    edges {
                      node {
                        frontmatter {
                          title
                          id
                        }
                      }
                    }
                  }
                }
              `}
              render={data => {
                console.log('DATA', data)
                const { edges } = data.allMarkdownRemark
                return <p>test</p>
              }}
            />
          )
        }}
      </Query>
    </Layout>
  )
}

export default event
export { MY_EVENTS_QUERY }
