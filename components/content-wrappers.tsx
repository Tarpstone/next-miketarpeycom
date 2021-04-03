import React from "react"
import styled from "styled-components"
import { gridBreakpoints } from "../utils/breakpoints"

interface ContentWrapperProps {
  className?: string
  children: React.ReactNode
  wrapperGridColumns?: Array<string>
}

const GriddedIndexSection = styled.section`
  padding: 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
`

export const IndexCardGrid = ({ children }: ContentWrapperProps) => (
  <GriddedIndexSection>{children}</GriddedIndexSection>
)

const GriddedAboutSection = styled.section`
  padding: 0;
  display: grid;
  grid-gap: 0px;
  ${gridBreakpoints("grid-template-columns", [
    { 0: "1fr" },
    { 800: "400px 1fr" },
  ])}
`

export const AboutCardGrid = ({ children }: ContentWrapperProps) => (
  <GriddedAboutSection>{children}</GriddedAboutSection>
)

const UnstyledProjectsSection = ({
  className,
  children,
}: ContentWrapperProps) => <section className={className}>{children}</section>

export const FlexProjectsSection = styled(UnstyledProjectsSection)`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`
