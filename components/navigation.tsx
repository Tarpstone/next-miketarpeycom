import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const StyledListLink = styled.a`
  background: ${props => props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ListLink = props => (
  <Link href={props.to} passHref>
    <StyledListLink>{props.children}</StyledListLink>
  </Link>
)

const TopRightNav = styled.div`
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

const DropdownCover = styled.span`
  background: ${props => props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 20px 25px;
`

const DropdownNavList = styled.ul`
  background-color: #FFFFFF;
  display: none;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  margin: 0;
`

const MobileNav = styled.nav`
  ${breakpoints("display", "", [{ 0: "inline-block" }, { 800: "none" }])}
  position: relative;
  &:hover ${DropdownNavList} {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  &:focus ${DropdownNavList} {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`

const DropdownNavItem = styled.li`
  clear: both;
  width: 100%;
  background: ${props => props.theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Navigation = () => {
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
              <ListLink to={navItem.slug}>{navItem.name}</ListLink>
            </DesktopNavItem>
          ))}
        </DesktopNavList>
      </DesktopNav>
      <MobileNav>
        <DropdownCover>
          test navigation
        </DropdownCover>
        <DropdownNavList>
          {navMetadata.map(navItem => (
              <DropdownNavItem key={navItem.slug}>
                <ListLink to={navItem.slug}>{navItem.name}</ListLink>
              </DropdownNavItem>
            ))}
        </DropdownNavList>
      </MobileNav>
    </TopRightNav>
  )
}

export default Navigation
