import React from 'react'
import Layout from '../components/layout'
import { ApolloConsumer } from 'react-apollo'
import { Heading } from 'rebass'

import Signout from '../containers/Signout'
import PleaseSignin from '../containers/PleaseSignin'
import { CURRENT_USER_QUERY } from '../containers/User'

const profile = () => (
  <Layout>
    <PleaseSignin>
      <ApolloConsumer>
        {client => {
          const data = client.readQuery({ query: CURRENT_USER_QUERY })
          const { name, email } = data.me

          return (
            <>
              <Heading fontSize={[4, 5]}>{name}</Heading>
              <Heading m={5} fontSize={[2, 3]} fontWeight="lighter">
                {email}
              </Heading>
              <Signout />
            </>
          )
        }}
      </ApolloConsumer>
    </PleaseSignin>
  </Layout>
)

export default profile
