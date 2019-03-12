import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import User from '../containers/User'
import PleaseSignin from '../containers/PleaseSignin'
import Card from '../components/Card'
import FilterLinks from '../components/FilterLinks'

const going = ({
  data: {
    allMarkdownRemark: { edges: allEvents },
  },
}) => (
  <Layout>
    <PleaseSignin>
      <User>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>
          if (error) return <p>{error.message}</p>
          const { events } = data.me

          // filter all events for event postId === userEvent postId
          // this must be done client side, because gatsby static query does not take variables

          const going = events.map(event => {
            const goingNodes = []
            allEvents.filter(allEvent => {
              if (allEvent.node.frontmatter.id === event.postId) {
                goingNodes.push(allEvent)
              }
            })
            return goingNodes
          })

          return (
            <>
              <FilterLinks />
              {going.map(event => {
                const {
                  fields: slug,
                  frontmatter: {
                    title,
                    id,
                    featuredImage: {
                      childImageSharp: { fluid },
                    },
                  },
                } = event[0].node
                // prettier-ignore
                return  <Card title={title} fluid={fluid} postId={id} slug={slug.slug} key={id} />
              })}
            </>
          )
        }}
      </User>
    </PleaseSignin>
  </Layout>
)

export default going

export const allEventsQuery = graphql`
  query allEventsQuery {
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
