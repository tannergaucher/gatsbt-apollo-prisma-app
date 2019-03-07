import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { navigate } from '@reach/router'

import Error from '../components/Error'
import Fieldset from '../components/styles/Fieldset'
import Input from '../components/styles/Input'
import { Button, Box } from 'rebass'

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
                // change to last page from history
                navigate('/')
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
                <Box mt={2}>
                  <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Box>
                <Box mt={2}>
                  <Input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Box>
                <Button type="submit" bg="black" mt={2} disabled={loading}>
                  Sign up
                </Button>
              </Fieldset>
            </form>
          </>
        )}
      </Mutation>
    )
  }
}

export default Signup
