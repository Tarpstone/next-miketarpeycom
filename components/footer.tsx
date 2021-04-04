import React from "react"
import styled from "styled-components"
import { breakpoints, gridBreakpoints } from "../utils/breakpoints"

interface FooterProps {
  hText: string
}

const StyledFooterDiv = styled.div`
  height: 70px;
  width: 100%;
  margin: 25px 0 0 0;
  display: grid;
  ${gridBreakpoints("grid-template-columns", [
    { 0: "1fr" },
    { 900: "1fr 1fr" },
  ])}
  background-color: #FFFFFF;
`

const GradientText = styled.h5`
  background: ${props => props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${breakpoints("padding", "", [
    { 0: "10px 25px 5px 25px" },
    { 900: "20px 25px" },
  ])}
  ${breakpoints("justify-self", "", [{ 0: "center" }, { 900: "left" }])}
`

const NewFooter = ({ hText }: FooterProps) => {
  return (
    <footer>
      <StyledFooterDiv>
        <GradientText>{hText}</GradientText>
      </StyledFooterDiv>
    </footer>
  )
}

export default NewFooter
