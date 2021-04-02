import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

interface HeaderProps {
  h1text: string
}

const StyledHeaderDiv = styled.div`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const GradientText = styled.h1`
  background: ${props => props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const NewHeader = ({ h1text }: HeaderProps) => {
  return (
    <header>
      <StyledHeaderDiv>
        <GradientText>{h1text}</GradientText>
        <Navigation />
      </StyledHeaderDiv>
    </header>
  )
}

export default NewHeader
