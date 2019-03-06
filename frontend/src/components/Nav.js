import React from 'react'
import Link from 'gatsby-link'
import { navigate } from '@reach/router'

import Signout from '../containers/Signout'

import User from '../containers/User'

const style = {
  display: 'flex',
  justifyContent: 'space-between',
}

const Nav = () => (
  <User>
    {({ data }) => {
      return (
        <div style={style}>
          <Link to="/">
            <h4>Gatsby Apollo Prisma App</h4>
          </Link>
          <Link to="/my-events">
            <h4>My events</h4>
          </Link>

          {data.me ? (
            <Signout />
          ) : (
            <button
              onClick={() => {
                navigate(`/signin`)
              }}
            >
              Sign in
            </button>
          )}
        </div>
      )
    }}
  </User>
)

export default Nav
