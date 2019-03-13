import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'

import { CURRENT_USER_QUERY } from './User'
import Signin from './Signin'
import Signup from './Signup'
import Loading from '../components/Loading'

const Styled = styled.div`
  display: flex;
  justify-content: center;
`

const Auth = () => (
  <Styled>
    <Signin />
    <Signup />
  </Styled>
)

const PleaseSignin = ({ children }) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data: { me }, loading }) => {
      if (loading) return <Loading />

      return !me ? <Auth /> : children
    }}
  </Query>
)

export default PleaseSignin
