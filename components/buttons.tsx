import React from "react"
import Link from "next/link"
import styled from "styled-components"

interface ButtonProps {
  label: string
  url: string
  kind: string
  width: string
}

export const StyledButton = styled.button`
  width: ${props => props.width};
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(31, 38, 135, 0.7),
    -2px 2px 4px rgba(31, 38, 135, 0.7);
  place-items: center;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  padding: 0.5rem 0.5rem;
  transition: 0.3s;
  ${props => {
    if (props.kind === "dark") {
      return `
        color: white;
        background: ${props.theme.gradients.buttonDark};
        border: 0px solid white;
      `
    } else {
      return `
        color: black;
        background: ${props.theme.gradients.buttonLight};
        border: 0px solid black;
      `
    }
  }}
`

export const InternalButton = ({ label, url, kind, width }: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <Link href={url} passHref>
      <StyledButton kind={kind} width={width}>
        {label}
      </StyledButton>
    </Link>
  </div>
)

export const ExternalButton = ({ label, url, kind, width }: ButtonProps) => (
  /* outer div allows us to pad and align */
  <div>
    <a href={url}>
      <StyledButton kind={kind} width={width}>
        {label}
      </StyledButton>
    </a>
  </div>
)
