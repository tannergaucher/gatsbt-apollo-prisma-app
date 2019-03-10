import React from 'react'

import Link from '../components/styles/Link'
import isActiveLink from '../utils/isActiveLink'
import filterToUrl from '../utils/filterToUrl'

const FilterLink = ({ filter }) => (
  <Link
    to={`/${filterToUrl(filter)}`}
    // because using a boolean here throws a browser error 'recieved false for non-boolean attrubute
    active={isActiveLink(filter) ? 'active' : undefined}
    style={{ margin: '0 1em' }}
  >
    {filter}
  </Link>
)

export default FilterLink
