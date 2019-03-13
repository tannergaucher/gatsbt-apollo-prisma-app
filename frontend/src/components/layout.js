import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Nav from './Nav'

const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

const theme = {
  spacing: '1em',
  radius: '14px',
  black: 'black',
  white: 'white',
}

const Main = styled.main`
  max-width: 42em;
  margin: 4em auto;
  padding-left: ${props => props.theme.spacing};
  padding-right: ${props => props.theme.spacing};
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />

      <Nav />
      <Main>{children}</Main>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
