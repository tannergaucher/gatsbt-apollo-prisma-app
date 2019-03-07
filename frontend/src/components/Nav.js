import React from 'react'
import { Flex } from 'rebass'

import Signout from '../containers/Signout'
import User from '../containers/User'
import Link from '../components/styles/Link'

const Nav = () => (
  <Flex
    justifyContent="space-between"
    p={2}
    bg="#f6f6ff"
    css={{ boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, .1)' }}
  >
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
  </Flex>
)

export default Nav
