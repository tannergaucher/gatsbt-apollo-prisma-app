import styled from 'styled-components'
import Link from 'gatsby-link'

const MyLink = styled(Link)`
  color: ${props => props.theme.black};
  text-decoration: none;
`

export default MyLink
