import React from 'react'
import Layout from '../components/layout'

import User from '../containers/User'
import Signout from '../containers/Signout'
import Signin from '../containers/Signin'
import Signup from '../containers/Signup'

const Auth = () => (
  <>
    <Signin />
    <Signup />
  </>
)

const profile = () => (
  <Layout>
    <User>
      {({ data, loading }) => {
        if (loading) return null
        if (!data.me) return <Auth />

        const { name, email } = data.me

        return (
          <>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <Signout />
          </>
        )
      }}
    </User>
  </Layout>
)

export default profile
