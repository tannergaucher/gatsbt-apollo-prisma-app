import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background: ${props => props.theme.black};
  color: white;
  font-size: 16px;
  padding: 0.25em;
  border-radius: ${props => props.theme.radius};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: ${props => props.theme.spacing};
`

export default Button
