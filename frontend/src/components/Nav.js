import React from 'react'
import Link from 'gatsby-link'
import { navigate } from '@reach/router'
import styled from 'styled-components'

import Signout from '../containers/Signout'
import User from '../containers/User'

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
`

const Nav = () => (
  <Styled>
    <Link to="/">
      <h4>Gatsby Apollo Prisma App</h4>
    </Link>
    <Link to="/my-events">
      <h4>My events</h4>
    </Link>

    <User>
      {({ data, loading }) => {
        return data.me ? (
          <Signout name={data.me.name} />
        ) : (
          <a
            href="#"
            onClick={() => {
              navigate(`/signin`)
            }}
          >
            <h4>Sign in</h4>
          </a>
        )
      }}
    </User>
  </Styled>
)

export default Nav
