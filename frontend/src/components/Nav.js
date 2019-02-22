import React from 'react'
import Link from 'gatsby-link'
import { Query } from 'react-apollo'

import Signout from '../components/Signout'

import { CURRENT_USER_QUERY } from '../components/User'

// toggle sign out / sign in

// read isSignedIn bool from @client local state

// if true, display: sign out
// if false, display sign in

const Nav = ({ title }) => (
  <div style={style}>
    <Link to="/">
      <h4>{title}</h4>
    </Link>
    <Link to="/my-events">
      <h4>My events</h4>
    </Link>

    <Link to="/signin">
      <h4>Sign in</h4>
    </Link>

    <Signout />
  </div>
)

export default Nav
export { CURRENT_USER_QUERY }

const style = {
  display: 'flex',
  justifyContent: 'space-between',
}
