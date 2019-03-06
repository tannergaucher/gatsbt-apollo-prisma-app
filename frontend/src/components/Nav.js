import React from 'react'
import Link from 'gatsby-link'

import Signout from '../containers/Signout'

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
    <Signout />
    <Link to="/signin">Signin</Link>
  </div>
)

export default Nav
