import styled from 'styled-components'
import { Button } from 'rebass'

const MyButton = styled(Button)`
  background: rgba(0, 0, 0, 0.4);
  transition: 0.2s;
  border-radius: ${props => props.theme.radius};

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`

export default MyButton
