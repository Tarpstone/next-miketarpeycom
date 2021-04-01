import React from "react"
import NewLayout from "../components/layout"
import { MeCard } from "../components/content-cards"
import { AboutCardGrid } from "../components/content-wrappers"

export default function Home() {
  return (
    <NewLayout
      titleTwo=" - about"
      description="Mike Tarpey's resume and project history."
      url="https://miketarpey.com/about"
      h1text="about"
    >
      <AboutCardGrid>
        <MeCard
          imagesrc="/images/raw/mike-tarpey-headshot-20200427.jpg"
          imagealt="Recent headshot of Mike Tarpey."
        />
      </AboutCardGrid>
    </NewLayout>
  )
}
