import React from 'react'
import styled from 'styled-components'

import FilterLinks from '../components/FilterLinks'

const Styled = styled.nav`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  padding: 0 2em;
  height: 62px;
`

const Nav = () => (
  <Styled>
    <FilterLinks />
  </Styled>
)

export default Nav
