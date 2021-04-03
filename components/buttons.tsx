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
  place-items: center;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  padding: 0.5rem 0.5rem;
  border-radius: 3px;
  transition: 0.3s;
  ${props => {
    if (props.kind === "dark") {
      return `
        color: black;
        background: rgba(155, 155, 155, 0.4);
        border: 2px solid black;
        &:hover {
          background: rgba(155, 155, 155, 1);
        }
      `
    } else {
      return `
        color: white;
        background: rgba(0, 0, 0, 0.4);
        border: 2px solid white;
        &:hover {
          background: rgba(70, 70, 70, 1);
        }
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
