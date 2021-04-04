import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { Email, GitHub, Twitter, Instagram } from "../icons/logos"

const StyledListLink = styled.a`
  background: ${props =>
    props.active
      ? props.theme.gradients.highlight
      : props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ListLink = props => (
  <Link href={props.to} passHref>
    <StyledListLink target="_blank" rel="noopener noreferrer">
      {props.children}
    </StyledListLink>
  </Link>
)

const SocialNav = styled.nav`
  ${breakpoints("place-self", "", [{ 0: "center" }, { 900: "center start" }])}
  display: flex;
`

const SocialNavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 20px 25px;
  ${breakpoints("padding", "", [{ 0: "5px 25px" }, { 900: "20px 25px" }])}
`

const SocialNavItem = styled.li`
  font-weight: 700;
  display: flex;
  flex-direction: columns;
  ${breakpoints("margin", "", [{ 0: "0 5px" }, { 900: "0 0 0 25px" }])}
  margin: 0 0 0 25px;
`

const Navigation = () => {
  return (
    <SocialNav>
      <SocialNav>
        <SocialNavList>
          <SocialNavItem>
            <ListLink to="https://github.com/AnnuityDew">
              <GitHub />
            </ListLink>
          </SocialNavItem>
          <SocialNavItem>
            <ListLink to="https://twitter.com/MichaelTarpey">
              <Twitter />
            </ListLink>
          </SocialNavItem>
          <SocialNavItem>
            <ListLink to="https://instagram.com/annuitydew">
              <Instagram />
            </ListLink>
          </SocialNavItem>
        </SocialNavList>
      </SocialNav>
    </SocialNav>
  )
}

export default Navigation
