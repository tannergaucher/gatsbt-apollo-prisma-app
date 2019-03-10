import styled from 'styled-components'

const FAB = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  border: none;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.06);
  font-size: 24px;
  transition: 0.2s ease-in-out;
  opacity: 0.97;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: rotate(90deg) scale(1.2);
  }

  &:focus {
    border-radius: 50%;
    background: white;
    color: black;
    transition: 0.4s ease-in-out;
  }
`

export default FAB
