import styled from 'styled-components'
import { space } from 'rebass'

const Input = styled.input`
  ${space};
  border: none;
  font-size: 16px;
  padding: 0.25em;
  border-radius: ${props => props.theme.radius};
`
export default Input
