import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
import { breakpoints, gridBreakpoints } from "../utils/breakpoints"

interface HeaderProps {
  h1text: string
  currentPage: string
}

const StyledHeaderDiv = styled.div`
  display: grid;
  ${gridBreakpoints("grid-template-columns", [
    { 0: "1fr" },
    { 800: "1fr 1fr" },
  ])}
  background-color: #FFFFFF;
`

const GradientText = styled.h1`
  background: ${props => props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${breakpoints("padding", "", [
    { 0: "10px 25px 5px 25px" },
    { 800: "20px 25px" },
  ])}
  ${breakpoints("justify-self", "", [{ 0: "center" }, { 800: "left" }])}
`

const NewHeader = ({ h1text, currentPage }: HeaderProps) => {
  return (
    <header>
      <StyledHeaderDiv>
        <GradientText>{h1text}</GradientText>
        <Navigation currentPage={currentPage} />
      </StyledHeaderDiv>
    </header>
  )
}

export default NewHeader
