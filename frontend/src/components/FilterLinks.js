import React from 'react'
import Link from '../components/styles/Link'

const FilterLinks = () => {
  return (
    <>
      <Link to="/" mr={2}>
        All
      </Link>
      <Link to="going" mr={2}>
        Going
      </Link>
      <Link to="not-going" mr={2}>
        Not Going
      </Link>
    </>
  )
}

export default FilterLinks
