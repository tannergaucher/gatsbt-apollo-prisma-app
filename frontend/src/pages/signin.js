import React from 'react'
import { Flex } from 'rebass'

import Centered from '../components/styles/Centered'
import Layout from '../components/layout'
import Link from '../components/styles/Link'
import Signin from '../containers/Signin'

const signin = () => (
  <Layout>
    <Centered>
      <Flex>
        <h2>Sign In</h2>
        <Link to="/signup">
          <h2>Sign up</h2>
        </Link>
      </Flex>
      <Signin />
    </Centered>
  </Layout>
)

export default signin
