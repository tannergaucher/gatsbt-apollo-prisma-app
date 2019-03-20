import React from 'react'
import styled from 'styled-components'

import FilterLink from '../components/FilterLink'

import { PersonOutline } from 'styled-icons/material/PersonOutline'
import { Home } from 'styled-icons/fa-solid/Home'
import { CalendarCheck } from 'styled-icons/fa-solid/CalendarCheck'

const HomeIcon = styled(Home)`
  color: red;
`

const FilterLinks = () => {
  return (
    <>
      <FilterLink filter="All" icon={HomeIcon} />
      <FilterLink filter="Going" icon={HomeIcon} />
      <FilterLink filter="Profile" icon={HomeIcon} />
    </>
  )
}

export default FilterLinks
