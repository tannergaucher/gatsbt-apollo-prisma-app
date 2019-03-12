import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Proptypes from 'prop-types'

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      events {
        postId
      }
    }
  }
`

const User = props => (
  <Query query={CURRENT_USER_QUERY}>{payload => props.children(payload)}</Query>
)

User.propTypes = {
  children: Proptypes.func.isRequired,
}

export default User
export { CURRENT_USER_QUERY }
