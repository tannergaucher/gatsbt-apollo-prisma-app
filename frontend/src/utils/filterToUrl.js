import { kebabCase } from 'lodash'

function filterToUrl(filter) {
  return filter === `All` ? '' : kebabCase(filter)
}

export default filterToUrl
