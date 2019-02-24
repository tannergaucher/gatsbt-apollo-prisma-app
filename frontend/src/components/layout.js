import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Nav from './Nav'

import Signin from '../components/Signin'
import Signup from '../components/Signup'

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

const Auth = () => (
  <>
    <Signin />
    <Signup />
  </>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Nav title={data.site.siteMetadata.title} />
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            return data.isLoggedIn ? <main>{children}</main> : <Auth />
          }}
        </Query>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export { IS_LOGGED_IN }
