import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { CURRENT_USER_QUERY } from '../components/User'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { loading, error }) => (
          <>
            <form
              onSubmit={async e => {
                e.preventDefault()
                if (error) {
                  console.log(error.message)
                }
                const res = await signup()
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h1>Sign up</h1>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <input
                  name="name"
                  type="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <button type="submit">submit</button>
              </fieldset>
            </form>
          </>
        )}
      </Mutation>
    )
  }
}

export default Signup
