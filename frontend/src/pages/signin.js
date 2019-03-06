import React from 'react'
import Layout from '../components/layout'

import Signup from '../containers/Signup'
import Signin from '../containers/Signin'

const signin = () => (
  <Layout>
    <Signin />
    <Signup />
  </Layout>
)

export default signin
