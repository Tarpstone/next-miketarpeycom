import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

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
    <StyledListLink active={props.active}>{props.children}</StyledListLink>
  </Link>
)

const SiteNav = styled.nav`
  ${breakpoints("place-self", "", [{ 0: "center" }, { 900: "center end" }])}
  display: flex;
`

const SiteNavList = styled.ul`
  display: flex;
  flex-direction: row;
  ${breakpoints("padding", "", [
    { 0: "5px 25px" },
    { 900: "20px 25px 20px 0" },
  ])}
`

const SiteNavItem = styled.li`
  font-weight: 700;
  display: flex;
  flex-direction: columns;
  ${breakpoints("margin", "", [{ 0: "0px 5px" }, { 900: "0 0 0 25px" }])}
`

const Navigation = ({ currentPage }) => {
  const navMetadata = [
    { name: "home", slug: "/" },
    { name: "about", slug: "/about" },
    { name: "timeline", slug: "/timeline" },
    { name: "friends", slug: "/friends" },
    { name: "credits", slug: "/credits" },
  ]

  return (
    <SiteNav>
      <SiteNavList>
        {navMetadata.map(navItem => (
          <SiteNavItem key={navItem.slug}>
            <ListLink to={navItem.slug} active={navItem.name === currentPage}>
              {navItem.name}
            </ListLink>
          </SiteNavItem>
        ))}
      </SiteNavList>
    </SiteNav>
  )
}

export default Navigation
