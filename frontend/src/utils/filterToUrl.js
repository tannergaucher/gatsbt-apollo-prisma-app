import { kebabCase } from 'lodash'

function filterToUrl(filter) {
  if (filter === 'All') {
    return ''
  }
  return kebabCase(filter)
}

export default filterToUrl
