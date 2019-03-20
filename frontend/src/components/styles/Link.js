import styled from 'styled-components'
import Link from 'gatsby-link'
import { space } from 'styled-system'

const MyLink = styled(Link)`
  ${space};
  text-decoration: none;
  color: ${props =>
    props.active === 'active' ? props.theme.black : props.theme.grey};
`

export default MyLink
