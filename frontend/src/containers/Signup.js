import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Error from '../components/Error'
import Fieldset from '../components/styles/Fieldset'
import Input from '../components/styles/Input'
import Button from '../components/styles/Button'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        name
        id
        email
        events {
          id
          eventId
        }
      }
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
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { loading, error }) => (
          <>
            <form
              onSubmit={async e => {
                e.preventDefault()
                const res = await signup()
                console.log('RES', res)
              }}
            >
              <Fieldset disabled={loading} aria-busy={loading}>
                <Error error={error} />
                <h1>Sign up</h1>
                <Input
                  name="email"
                  type="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Input
                  name="name"
                  type="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <Button type="submit">submit</Button>
              </Fieldset>
            </form>
          </>
        )}
      </Mutation>
    )
  }
}

export default Signup
