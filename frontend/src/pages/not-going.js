import React from 'react'

import Layout from '../components/layout'
import PleaseSignin from '../containers/PleaseSignin'
import User from '../containers/User'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'
import AddEvent from '../containers/AddEvent'
import WithBadge from '../components/styles/WithBadge'

import notUserEventNodes from '../utils/notUserEventNodes'

const notGoing = ({
  data: {
    allMarkdownRemark: { edges: allEvents },
  },
}) => {
  return (
    <Layout>
      <PleaseSignin>
        <User>
          {({ data, loading, error }) => {
            if (loading) return <p>loading...</p>
            if (error) return <p>{error.message}</p>
            if (!data.me) return <p>no data.me</p>

            const { events } = data.me

            return (
              <>
                <FilterLinks />
                {notUserEventNodes(events, allEvents).map(notUserEvent => {
                  const {
                    id,
                    fields: { slug },
                    frontmatter: {
                      title,
                      featuredImage: {
                        childImageSharp: { fluid },
                      },
                    },
                  } = notUserEvent.node

                  return (
                    // replace all of this with just <Card/>

                    // card does the isGoing Query

                    <WithBadge key={id}>
                      <Link to={slug} key={id} none="true">
                        <Card title={title} fluid={fluid} />
                      </Link>
                      <div className="absolute">
                        <AddEvent nodeId={id} />
                      </div>
                    </WithBadge>
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
