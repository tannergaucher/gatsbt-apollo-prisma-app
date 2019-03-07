import React from 'react'
import Link from '../components/styles/Link'

const FilterLinks = () => {
  return (
    <div className="filter-links">
      <Link to="/">All</Link>
      <Link to="going">Going</Link>
      <Link to="not-going">Not Going</Link>
    </div>
  )
}

export default FilterLinks
