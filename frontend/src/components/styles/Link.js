import styled from 'styled-components'
import Link from 'gatsby-link'
import { space, fontWeight } from 'styled-system'

const MyLink = styled(Link)`
  ${space};
  ${fontWeight};
  color: ${props => (props.active ? 'palevioletred' : props.theme.black)};
  text-decoration: none;
`

export default MyLink
