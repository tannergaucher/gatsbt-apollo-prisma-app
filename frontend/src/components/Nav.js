import React from 'react'
import styled from 'styled-components'

import Link from '../components/styles/Link'

const Styled = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  color: black;
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
    <Link to="/profile" none="true">
      <h4>Profile</h4>
    </Link>
  </Styled>
)

export default Nav
