import React from 'react'
import Layout from '../components/layout'
import Event from '../components/Event'

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      {edges.map(edge => {
        const {
          node: {
            frontmatter: { title, id },
            fields: { slug },
          },
        } = edge
        return <Event key={slug} title={title} slug={slug} eventId={id} />
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
