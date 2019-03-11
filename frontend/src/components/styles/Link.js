import styled from 'styled-components'
import Link from 'gatsby-link'
import { space } from 'styled-system'

const MyLink = styled(Link)`
  ${space};
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: ${props => (props.active === 'active' ? 'bolder' : '')};
  /* color: ${props => (props.active === 'active' ? 'blue' : 'black')}; */
`

export default MyLink
