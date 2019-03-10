import React from 'react'
import styled from 'styled-components'

import Signout from '../containers/Signout'
import User from '../containers/User'
import Link from '../components/styles/Link'

const Styled = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #f6f6ff;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 0 2em;
`

const Nav = () => (
  <Styled>
    <Link to="/" none="true">
      <h4>Gatsby Apollo Prisma</h4>
    </Link>

    <User>
      {({ data }) => {
        return data.me ? (
          <Signout />
        ) : (
          <Link to="/signin" none="true">
            <h4>Sign in</h4>
          </Link>
        )
      }}
    </User>
  </Styled>
)

export default Nav
