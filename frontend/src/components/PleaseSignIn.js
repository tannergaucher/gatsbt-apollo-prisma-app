import React from 'react'
import { Query } from 'react-apollo'

import Layout from './layout'
import { CURRENT_USER_QUERY } from './User'
import Signin from './Signin'

const PleaseSignIn = props => (
  <Layout>
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return <p>Loading </p>
        if (!data.me) {
          return (
            <>
              <h3>You must be signed in for that</h3>
              <Signin />
            </>
          )
        }
        return props.children
      }}
    </Query>
  </Layout>
)

export default PleaseSignIn
