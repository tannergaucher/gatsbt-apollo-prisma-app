import React from 'react'
import { Query } from 'react-apollo'
import { Flex } from 'rebass'

import { CURRENT_USER_QUERY } from './User'
import Signin from './Signin'
import Loading from '../components/Loading'
import Centered from '../components/styles/Centered'
import Link from '../components/styles/Link'

const Auth = () => (
  <Centered>
    <h1>Please Sign In</h1>
    <Flex>
      <h2>Sign In</h2>
      <Link to="/signup">
        <h2>Sign up</h2>
      </Link>
    </Flex>
    <Signin />
  </Centered>
)

const PleaseSignin = ({ children }) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <Loading />

      const me = data ? data.me : null

      return me ? children : <Auth />
    }}
  </Query>
)

export default PleaseSignin
