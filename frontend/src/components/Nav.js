import React from 'react'
import Link from 'gatsby-link'
import { Query } from 'react-apollo'

import { IS_LOGGED_IN } from './layout'
import Signout from '../components/Signout'

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
    <Query query={IS_LOGGED_IN}>
      {({ data }) => (data.isLoggedIn ? <Signout /> : null)}
    </Query>
  </div>
)

export default Nav
