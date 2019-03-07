import styled from 'styled-components'

const Input = styled.input`
  border: none;
  font-size: 16px;
  padding: 0.25em;
  border-radius: ${props => props.theme.radius};
  margin-top: ${props => props.theme.spacing};
`
export default Input
