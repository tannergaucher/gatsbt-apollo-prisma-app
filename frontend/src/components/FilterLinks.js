import React from 'react'
import FilterLink from '../components/FilterLink'

const FilterLinks = () => {
  return (
    <>
      <FilterLink filter="All" />

      <FilterLink filter="Going" />

      <FilterLink filter="Not Going" />
    </>
  )
}

export default FilterLinks
