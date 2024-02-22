import { useState } from 'react'
import { StyledContainer } from './components/styled'
import { Button } from './components/Button'
import { CoolButton, StrongButton, SubmitButton } from './components/Button/Button.styled'
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const CanadaStyledIcon = styled(FaCanadianMapleLeaf)`
  font-size: 40px;
  animation: ${rotate} 3s linear infinite;
  color: red;
`

const StyledImg = styled.img`
  
  width: 100%;
  padding: 4px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;

  &:hover {
    animation: ${rotate} 10s linear infinite;
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StyledContainer>
        <StyledImg src="https://picsum.photos/id/1037/1200/300" />
        <hr />
        <CanadaStyledIcon></CanadaStyledIcon>
        Styled Container Uygulandı!!
        <Button $primary className="btn">
          İncele
        </Button>
        <StrongButton $primary>
          Stron Button
        </StrongButton>
        <CoolButton as="a" href='https://gradientbuttons.colorion.co/' target='_blank'>
          Gradient Button
        </CoolButton>
        <SubmitButton $primary>
          Kaydet
        </SubmitButton>
      </StyledContainer>
    </>
  )
}

export default App
