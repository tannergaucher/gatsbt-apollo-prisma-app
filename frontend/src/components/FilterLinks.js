import React from 'react'
import FilterLink from '../components/FilterLink'
import styled from 'styled-components'

const Styled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
`

const FilterLinks = () => {
  return (
    <Styled>
      <FilterLink filter="All" />
      <FilterLink filter="Going" />
      {/* Count here */}
    </Styled>
  )
}

export default FilterLinks
