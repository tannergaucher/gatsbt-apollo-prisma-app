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

const PleaseSignin = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <Loading />

      if (!data.me) {
        return (
          <>
            <Styled>
              <Signin />
              <Signup />
            </Styled>
          </>
        )
      }

      return props.children
    }}
  </Query>
)

export default PleaseSignin
