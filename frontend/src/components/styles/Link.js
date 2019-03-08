import styled from 'styled-components'
import Link from 'gatsby-link'
import { space } from 'styled-system'

const MyLink = styled(Link)`
  ${space};
  color: ${props => (props.active ? 'blue' : props.theme.black)};
  text-decoration: ${props => (props.none || !props.active ? 'none' : '')};
`

export default MyLink
