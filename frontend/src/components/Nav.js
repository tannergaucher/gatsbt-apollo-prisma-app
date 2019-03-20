import React from 'react'
import styled from 'styled-components'

import FilterLinks from '../components/FilterLinks'

const Styled = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3;
  padding: ${props => props.theme.spacing} ${props => props.theme.spacing};

  @media (max-width: 1000px) {
    bottom: 0;
    justify-content: center;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    background: ${props => props.theme.white};
  }
`

const Nav = () => (
  <Styled>
    <FilterLinks />
  </Styled>
)

export default Nav
