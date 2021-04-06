import React from "react"
import styled from "styled-components"
import { MeCard } from "../components/content-cards"
import { breakpoints, gridBreakpoints } from "../utils/breakpoints"

interface ContentWrapperProps {
  Sectionh2?: string
  className?: string
  children: React.ReactNode
  wrapperGridColumns?: Array<string>
}

const GriddedIndexSection = styled.section`
  padding: 0 25px 0 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  margin: 0 0 25px 0;
`

export const IndexCardGrid = ({ children }: ContentWrapperProps) => (
  <GriddedIndexSection>{children}</GriddedIndexSection>
)

const GriddedAboutSection = styled.section`
  padding: 0 0 0 0;
  display: grid;
  grid-gap: 25px;
  ${gridBreakpoints("grid-template-columns", [
    { 0: "1fr" },
    { 900: "400px 1fr" },
  ])}
`

export const AboutCardGrid = ({ children }: ContentWrapperProps) => (
  <GriddedAboutSection>{children}</GriddedAboutSection>
)

const Resumeh2 = styled.h2`
  background: ${props => props.theme.glass.resume};
  &:hover {
    background: ${props => props.theme.glass.resumeHover};
  }
  transition: 0.3s;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  ${breakpoints("margin", "", [
    { 0: "25px 25px 25px 0" },
    { 900: "25px 0 25px 0" },
  ])}
  padding: 10px 20px;
`

const UnstyledResumeSection = ({
  className,
  children,
}: ContentWrapperProps) => (
  <section className={className}>
    <MeCard
      imagesrc="/images/raw/mike-tarpey-headshot-20200427.jpg"
      imagealt="Recent headshot of Mike Tarpey."
    />
  </section>
)

export const FlexResumeSection = styled(UnstyledResumeSection)`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

const Projectsh2 = styled.h2`
  width: 100%;
  color: black;
  background: ${props => props.theme.glass.inverted};
  &:hover {
    background: ${props => props.theme.glass.invertedHover};
  }
  transition: 0.3s;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid ${props => props.theme.glass.invertedBorder};
  margin: 0 25px 25px 0;
  padding: 10px 20px;
`

const UnstyledProjectsSection = ({
  Sectionh2,
  className,
  children,
}: ContentWrapperProps) => (
  <section className={className}>
    <Projectsh2>{Sectionh2}</Projectsh2>
    {children}
  </section>
)

export const FlexProjectsSection = styled(UnstyledProjectsSection)`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const UnstyledMiniGrid = ({ className, children }: ContentWrapperProps) => (
  <div className={className}>{children}</div>
)

export const MiniGrid = styled(UnstyledMiniGrid)`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 0px 15px;
`
