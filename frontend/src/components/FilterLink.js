import React from 'react'
import styled from 'styled-components'

import Link from '../components/styles/Link'
import isActiveLink from '../utils/isActiveLink'
import filterToUrl from '../utils/filterToUrl'

const MyLink = styled(Link)`
  margin-right: ${props => props.theme.spacing};
  &:last-child {
    margin-right: 0;
  }
`

const FilterLink = ({ filter }) => (
  <MyLink
    to={`/${filterToUrl(filter)}`}
    // because using a boolean here throws a browser error 'recieved false for non-boolean attribute
    active={isActiveLink(filter) ? 'active' : undefined}
  >
    {filter}
  </MyLink>
)

export default FilterLink
