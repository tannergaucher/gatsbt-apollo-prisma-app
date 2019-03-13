import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from 'rebass'

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
      {signout => {
        return (
          <Button onClick={signout} bg="black">
            SIGN OUT
          </Button>
        )
      }}
    </Mutation>
  )
}

export default Signout
