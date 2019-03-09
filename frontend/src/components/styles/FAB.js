import styled from 'styled-components'

const FAB = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: white;
  color: black;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  font-size: 16px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: rotate(90deg) scale(1.2);
  }

  &:focus {
    border-radius: 50%;
    background: palevioletred;
    color: white;
    transition: 0.4s ease-in-out;
  }
`

export default FAB
