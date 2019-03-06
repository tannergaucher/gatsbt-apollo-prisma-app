import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { navigate } from '@reach/router'

import Error from '../components/Error'

import { CURRENT_USER_QUERY } from './User'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        events {
          id
          eventId
        }
      }
    }
  }
`

class Signin extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error }, client) => {
          return (
            <>
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const res = await signin()
                  navigate(`/`)
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <h1>Sign In</h1>
                  <Error error={error} />
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    autoComplete="current-password"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

                  <button type="submit">submit</button>
                </fieldset>
              </form>
            </>
          )
        }}
      </Mutation>
    )
  }
}

export default Signin
