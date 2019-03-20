import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Nav from './Nav'
import Container from '../components/styles/Container'

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}


body {
  margin: 0;
  padding: 0;
  box-sizing: inherit;

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
  grey: 'darkgrey',
}

const App = styled.div`
  display: grid;
  grid-template-areas:
    'nav'
    'main';
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media (max-width: 1000px) {
    grid-template-areas:
      'main'
      'nav';
    grid-template-rows: 1fr auto;
  }
`

const Main = styled.main`
  grid-area: main;
  margin: 0 1em;
  height: 100%;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App>
        <Nav />
        <Main>{children}</Main>
      </App>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
