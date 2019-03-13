import React from 'react'
import styled from 'styled-components'
import FilterLink from '../components/FilterLink'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
`

const FilterLinks = () => {
  return (
    <Styled>
      <FilterLink filter="All" />
      <FilterLink filter="Going" />
      <FilterLink filter="Profile" />
    </Styled>
  )
}

export default FilterLinks
