import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const StyledListLink = styled.a`
  background: ${props => props.active ? props.theme.gradients.highlight : props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ListLink = props => (
  <Link href={props.to} passHref>
    <StyledListLink active={props.active}>{props.children}</StyledListLink>
  </Link>
)

const TopRightNav = styled.div`
  ${breakpoints("place-self", "", [{ 0: "center" }, { 800: "center end" }])}
  display: flex;
`

const DesktopNav = styled.nav`
  ${breakpoints("display", "", [{ 0: "none" }, { 800: "block" }])}
`

const DesktopNavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 20px 25px;
`

const DesktopNavItem = styled.li`
  font-weight: 700;
  display: flex;
  flex-direction: columns;
  margin: 0 0 0 25px;
`

const MobileNav = styled.nav`
  ${breakpoints("display", "", [{ 0: "block" }, { 800: "none" }])}
`

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 5px 25px;
`

const MobileNavItem = styled.li`
  font-weight: 700;
  display: flex;
  flex-direction: columns;
  margin: 0px 5px;
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
    <TopRightNav>
      <DesktopNav>
        <DesktopNavList>
          {navMetadata.map(navItem => (
            <DesktopNavItem key={navItem.slug}>
              <ListLink to={navItem.slug} active={(navItem.name === currentPage)}>{navItem.name}</ListLink>
            </DesktopNavItem>
          ))}
        </DesktopNavList>
      </DesktopNav>
      <MobileNav>
        <MobileNavList>
          {navMetadata.map(navItem => (
            <MobileNavItem key={navItem.slug}>
              <ListLink to={navItem.slug} active={(navItem.name === currentPage)}>
                {navItem.name}
              </ListLink>
            </MobileNavItem>
          ))}
        </MobileNavList>
      </MobileNav>
    </TopRightNav>
  )
}

export default Navigation
