import { kebabCase } from 'lodash'

function isActiveLink(link) {
  let { pathname } = window.location

  if (link === 'All') {
    link = '/'
  }

  let linkToUrl = `/${kebabCase(link)}`

  return pathname === linkToUrl
}

export default isActiveLink
