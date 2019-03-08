import styled from 'styled-components'
import { space } from 'rebass'

const Input = styled.input`
  ${space};
  border: 2px solid black;
  font-size: 16px;
  padding: 0.5em;
  border-radius: ${props => props.theme.radius};
`
export default Input
