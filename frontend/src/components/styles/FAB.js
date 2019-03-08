import styled from 'styled-components'

const FAB = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: black;
  color: white;
  border: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`

export default FAB
