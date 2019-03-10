import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import User from '../containers/User'
import PleaseSignin from '../containers/PleaseSignin'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'
import RemoveEvent from '../containers/RemoveEvent'
import WithFAB from '../components/styles/WithFAB'
import userEventNodes from '../utils/userEventNodes'

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

            const { events } = data.me

            return (
              <>
                <FilterLinks />
                {userEventNodes(events, allEvents).map(userEvent => {
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
                    <WithFAB key={id}>
                      <Link to={slug} none="true">
                        <Card title={title} fluid={fluid} />
                      </Link>
                      <div className="absolute">
                        <RemoveEvent nodeId={id} />
                      </div>
                    </WithFAB>
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
