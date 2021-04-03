import React from "react"
import NewLayout from "../components/layout"
import { MeCard, ProjectCard } from "../components/content-cards"
import { FlexProjectsSection, AboutCardGrid } from "../components/content-wrappers"
import { ExternalButton } from "../components/buttons"

export default function Home() {
  return (
    <NewLayout
      titleTwo=" - about"
      description="Mike Tarpey's resume and project history."
      url="https://miketarpey.com/about"
      h1text="about"
      currentPage="about"
    >
      <AboutCardGrid>
        <MeCard
          imagesrc="/images/raw/mike-tarpey-headshot-20200427.jpg"
          imagealt="Recent headshot of Mike Tarpey."
        />
        <FlexProjectsSection>
        <h2>projects</h2>
        <ProjectCard
          internal={true}
          label="autobracket"
          imagesrc="/images/raw/mike-tarpey-at-pax.jpg"
          imagealt="Mike Tarpey on his way to PAX East 2020 in Boston, Massachusetts."
        >
          <p>
            A mobile-first March Madness 2021 bracket generator using React with Next.js,
            capable of fetching and displaying game data (scores and statistics) from the backend API
            at <a href="https://api.tarpey.dev">api.tarpey.dev</a>.
          </p>
          <ExternalButton
            label="try the app (tarpey.dev)"
            url="https://tarpey.dev/autobracket"
            kind="light"
            width="100%"
          />
          <ExternalButton
            label="read more (medium.com)"
            url="https://medium.com/analytics-vidhya/march-madness-2021-simulating-a-bracket-part-1-7aa1cad69a65"
            kind="light"
            width="100%"
          />
        </ProjectCard>
        <ProjectCard
          internal={true}
          label="autobracket"
          imagesrc="/images/raw/mike-tarpey-at-pax.jpg"
          imagealt="Mike Tarpey on his way to PAX East 2020 in Boston, Massachusetts."
        >
          <p>
            test
          </p>
          <ExternalButton
            label="try the app (tarpey.dev)"
            url="https://tarpey.dev/autobracket"
            kind="light"
            width="100%"
          />
          <ExternalButton
            label="read more (medium.com)"
            url="https://medium.com/analytics-vidhya/march-madness-2021-simulating-a-bracket-part-1-7aa1cad69a65"
            kind="light"
            width="100%"
          />
        </ProjectCard>
        <ProjectCard
          internal={true}
          label="autobracket"
          imagesrc="/images/raw/mike-tarpey-at-pax.jpg"
          imagealt="Mike Tarpey on his way to PAX East 2020 in Boston, Massachusetts."
        >
          <p>
            test two test three
          </p>
          <ExternalButton
            label="try the app (tarpey.dev)"
            url="https://tarpey.dev/autobracket"
            kind="light"
            width="100%"
          />
          <ExternalButton
            label="read more (medium.com)"
            url="https://medium.com/analytics-vidhya/march-madness-2021-simulating-a-bracket-part-1-7aa1cad69a65"
            kind="light"
            width="100%"
          />
        </ProjectCard>
        </FlexProjectsSection>
      </AboutCardGrid>
    </NewLayout>
  )
}
