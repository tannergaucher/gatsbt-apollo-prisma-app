import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { CURRENT_USER_QUERY } from '../containers/User'

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
    >
      {signout => (
        <a onClick={signout} href="#">
          <h4>Sign out</h4>
        </a>
      )}
    </Mutation>
  )
}

export default Signout
