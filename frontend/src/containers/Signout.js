import React from 'react'
import { useMutation } from 'react-apollo-hooks'
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
  const signout = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    update: () => client.resetStore(),
  })

  return (
    <Link onClick={signout} none="true" to="/">
      <h4>Sign Out</h4>
    </Link>
  )
}

export default Signout
