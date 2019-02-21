import React from 'react'
import Link from 'gatsby-link'
import { Query } from 'react-apollo'

import Signout from '../components/Signout'

import { CURRENT_USER_QUERY } from '../components/User'

const style = {
  display: 'flex',
  justifyContent: 'space-between',
}

const Nav = ({ title }) => (
  <div style={style}>
    <Link to="/">
      <h4>{title}</h4>
    </Link>
    <Link to="/my-events">
      <h4>My events</h4>
    </Link>
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>loading</p>
        if (error) return <p>{error.message}</p>
        if (!data.me) {
          return (
            <Link to="/signin">
              <h4>Sign in</h4>
            </Link>
          )
        }

        return (
          <>
            <Signout name={data.me.name} />
          </>
        )
      }}
    </Query>
  </div>
)

export default Nav
export { CURRENT_USER_QUERY }
