import React from "react"
import Image from "next/image"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

interface CardProps {
  internal?: boolean
  label?: string
  children?: React.ReactNode
  imagesrc: string
  imagealt: string
  gridrowcss?: string
}

const IndexGlassDiv = styled.section`
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: ${props => props.gridTemplateRows || "3fr 1fr 2fr 1fr"};
  align-items: stretch;
  min-height: ${props => props.minHeight};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`

/* images that fill container
https://stackoverflow.com/questions/14142378/
how-can-i-fill-a-div-with-an-image-while-keeping-it-proportional
*/

const CoverPicDiv = styled.div`
  position: relative;
  height: 200px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(31, 38, 135, 0.7),
    -5px 5px 10px rgba(31, 38, 135, 0.7);
`

const CoverNextImage = styled(Image)`
  min-width: 100%;
  min-height: 100%;
  opacity: 100%;
`

const Cardh2 = styled.h2`
  place-self: end start;
`

export const NavCard = ({
  label,
  children,
  imagesrc,
  imagealt,
  gridrowcss,
}: CardProps) => {
  return (
    <IndexGlassDiv minHeight="400px" gridTemplateRows={gridrowcss}>
      <CoverPicDiv>
        <CoverNextImage
          src={imagesrc}
          alt={imagealt}
          layout="fill"
          objectFit="cover"
        />
      </CoverPicDiv>
      <Cardh2>{label}</Cardh2>
      {children}
    </IndexGlassDiv>
  )
}

const MeGlassDiv = styled.section`
  place-self: start;
  padding: 20px;
  min-height: ${props => props.minHeight || "40vh"};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`

const ContactDiv = styled.section`
  min-height: 150px;
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;
`

const MePicDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(31, 38, 135, 0.7),
    -5px 5px 10px rgba(31, 38, 135, 0.7);
`

const MarginList = styled.ul`
  margin: 0 10px;
`

export const MeCard = ({ imagesrc, imagealt }: CardProps) => {
  return (
    <MeGlassDiv>
      <ContactDiv>
        <MePicDiv>
          <Image
            src={imagesrc}
            alt={imagealt}
            layout="fill"
            objectFit="cover"
          />
        </MePicDiv>
        <MarginList>
          <li>
            <b>Mike Tarpey</b>
          </li>
          <li>
            <a href="mailto:mike@tarpey.dev">📧 mike@tarpey.dev</a>
          </li>
        </MarginList>
      </ContactDiv>
      <p>
        In my day-to-day as an Associate Actuary at Genworth Financial, I
        analyze the performance of our long-term care insurance block, manage
        projects, and synthesize many of our team's findings for leadership. I
        also serve as a resource to other internal teams looking to automate or
        modernize their processes with Python.
      </p>
      <p>
        I consider myself a non-traditional actuary at this point in my career.
        After rediscovering a lifelong passion for developing, my goal is to
        push as far as I can into the data / software engineering space and see
        what new ideas I can contribute to the world! To that end, I'll be
        pursuing a graduate degree starting in the fall of 2021.
      </p>
    </MeGlassDiv>
  )
}

const ProjectGlassDiv = styled.section`
  padding: 20px;
  flex-grow: 1;
  ${breakpoints("margin", "", [{ 0: "25px 0 0 0" }, { 800: "0 0 25px 25px" }])}
  margin:;
  display: flex;
  flex-direction: column;
  height: auto;
  grid-gap: 10px;
  grid-template-rows: ${props => props.gridTemplateRows || "3fr 1fr 2fr 1fr"};
  align-items: stretch;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`

export const ProjectCard = ({
  label,
  children,
  imagesrc,
  imagealt,
  gridrowcss,
}: CardProps) => {
  return (
    <ProjectGlassDiv minHeight="400px" gridTemplateRows={gridrowcss}>
      <CoverPicDiv>
        <CoverNextImage
          src={imagesrc}
          alt={imagealt}
          layout="fill"
          objectFit="cover"
        />
      </CoverPicDiv>
      <Cardh2>{label}</Cardh2>
      {children}
    </ProjectGlassDiv>
  )
}
