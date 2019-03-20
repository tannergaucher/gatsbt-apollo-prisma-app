import React from 'react'
import Layout from '../components/layout'
import Link from '../components/styles/Link'

import Centered from '../components/styles/Centered'
import Signup from '../containers/Signup'
import { Flex } from 'rebass'

const signup = () => (
  <Layout>
    <Centered>
      <Flex>
        <h2>Sign Up </h2>
        <Link to="/signin">
          <h2>Sign In</h2>
        </Link>
      </Flex>
      <Signup />
    </Centered>
  </Layout>
)

export default signup
