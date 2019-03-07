import React from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import Signin from './Signin'
import Signup from './Signup'
import { Flex, Heading } from 'rebass'

const PleaseSignin = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading</p>
      if (!data.me) {
        return (
          <>
            <Heading mt={4}>Please sign in</Heading>
            <Flex mt={4}>
              <Signin />
              <Signup />
            </Flex>
          </>
        )
      }
      return props.children
    }}
  </Query>
)

export default PleaseSignin
