import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Link from '../components/styles/Link'
import { CURRENT_USER_QUERY } from '../containers/User'
import { client } from '../apollo/client'

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = () => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      update={() => {
        client.resetStore()
      }}
    >
      {signout => (
        <Link onClick={signout} none="true" to="/">
          <h4>Sign out</h4>
        </Link>
      )}
    </Mutation>
  )
}

export default Signout
