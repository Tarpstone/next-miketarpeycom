import React from "react"
import NewLayout from "../components/layout"
import { ResumeCard, ProjectCard } from "../components/content-cards"
import {
  FlexResumeSection,
  FlexProjectsSection,
  AboutCardGrid,
  MiniGrid,
} from "../components/content-wrappers"
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
        <FlexResumeSection></FlexResumeSection>
        <FlexProjectsSection Sectionh2="projects">
          <ProjectCard
            internal={true}
            label="autobracket"
            imagesrc="/images/raw/autobracket.png"
            imagealt="A portion of a March Madness 2021 bracket from Mike Tarpey's autobracket app."
          >
            <MiniGrid>
              <div>Timeframe:</div>
              <div>2021</div>
              <div>Stack:</div>
              <div>
                MongoDB, Python, TypeScript, React with Next.js on Vercel
              </div>
            </MiniGrid>
            <p>
              A mobile-first March Madness 2021 bracket generator using React
              with Next.js, capable of fetching and displaying game data (scores
              and statistics) from the backend API at{" "}
              <a href="https://api.tarpey.dev">api.tarpey.dev</a>. The backend
              includes a data pipeline and game simulation model that uses
              Pandas and NumPy arrays to process thousands of simulations in
              parallel.
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
            label="mildred league"
            imagesrc="/images/raw/tarpeydevog.png"
            imagealt="A Plotly-based boxplot visualization using scores from a recent fantasy football season of Mildred League."
          >
            <MiniGrid>
              <div>Timeframe:</div>
              <div>2013 - present</div>
              <div>Stack:</div>
              <div>
                MongoDB, Python, TypeScript, React with Next.js on Vercel
              </div>
            </MiniGrid>
            <p>
              Home page for a fantasy football league I've managed for 8+ years.
              It includes Plotly-based data visualizations to analyze each
              team’s performance in a fantasy football league, and a playoff
              scenario model that automatically breaks complex ties among teams
              in the league.
            </p>
            <ExternalButton
              label="view stats (tarpey.dev)"
              url="https://timecapsule.tarpey.dev/mildredleague/"
              kind="light"
              width="100%"
            />
          </ProjectCard>
          <ProjectCard
            internal={true}
            label="A/E Pipeline"
            imagesrc="/images/raw/mike-tarpey-richmond-actuary.jpg"
            imagealt="A picture from one of the bridges over the James River, with the Richmond city skyline in the background."
          >
            <MiniGrid>
              <div>Company:</div>
              <div>Genworth Financial</div>
              <div>Role:</div>
              <div>Associate Actuary</div>
              <div>Timeframe:</div>
              <div>2019 - present</div>
              <div>Stack:</div>
              <div>PostgreSQL, Python, Kubernetes</div>
            </MiniGrid>
            <p>
              Converted multiple overlapping SAS codebases into a single Python
              program. Reduced total monthly runtime by more than 50% and began
              implementing DevOps basics (GitLab version control, formatting /
              linting pipeline). Currently maintaining the program and adding
              new features on a regular basis, including a Dash-based web
              dashboard deployed on Kubernetes.
            </p>
          </ProjectCard>
          <ProjectCard
            internal={true}
            label="Employee Benefits Harmonization"
            imagesrc="/images/raw/sunset-downtown-richmond.jpg"
            imagealt="Sunset picture from the top of a parking garage in downtown Richmond."
          >
            <MiniGrid>
              <div>Company:</div>
              <div>Mercer</div>
              <div>Role:</div>
              <div>Actuarial Associate</div>
              <div>Timeframe:</div>
              <div>2016 - 2018</div>
            </MiniGrid>
            <p>
              Performed actuarial and financial analysis to support a merger of
              health plans for two large clients (10,000+ employees), each with
              multiple subdivisions and benefits structures. Consulted with key
              stakeholders up to the VP level to minimize medical network
              disruption for employees while achieving millions of dollars in
              synergies. Assisted with private marketplace platform
              implementation.
            </p>
          </ProjectCard>
        </FlexProjectsSection>
      </AboutCardGrid>
    </NewLayout>
  )
}
