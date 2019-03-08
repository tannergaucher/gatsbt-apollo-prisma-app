import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/Card'
import Link from '../components/styles/Link'
import FilterLinks from '../components/FilterLinks'

const Styled = styled.div`
  margin-bottom: ${props => props.theme.spacing};
`

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <FilterLinks />
      {edges.map(edge => {
        const {
          node: {
            frontmatter: {
              title,
              id,
              featuredImage: {
                childImageSharp: { fluid },
              },
            },
            fields: { slug },
          },
        } = edge

        return (
          <Styled key={id}>
            <Link to={slug} none="true">
              <Card title={title} fluid={fluid} />
            </Link>
          </Styled>
        )
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
