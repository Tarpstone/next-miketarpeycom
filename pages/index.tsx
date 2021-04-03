import React from "react"
import NewLayout from "../components/layout"
import { NavCard } from "../components/content-cards"
import { IndexCardGrid } from "../components/content-wrappers"
import { InternalButton, ExternalButton } from "../components/buttons"

export default function Home() {
  return (
    <NewLayout h1text="mike tarpey" currentPage="home">
      <IndexCardGrid>
        <NavCard
          internal={true}
          label="about"
          imagesrc="/images/raw/mike-tarpey-at-pax.jpg"
          imagealt="Mike Tarpey on his way to PAX East 2020 in Boston, Massachusetts."
        >
          <p>Career and project history.</p>
          <InternalButton
            label="full resume + projects"
            url="/about"
            kind="light"
            width="100%"
          />
        </NavCard>
        <NavCard
          internal={true}
          label="timeline"
          imagesrc="/images/raw/mike-tarpey-childhood-beach.jpg"
          imagealt="Childhood picture of Mike Tarpey at Daytona Beach."
        >
          <p>A selection of the memories I carry around.</p>
          <InternalButton
            label="coming soon!"
            url="/timeline"
            kind="light"
            width="100%"
          />
        </NavCard>
        <NavCard
          internal={true}
          label="friends"
          imagesrc="/images/raw/dew-uconn-crew.jpg"
          imagealt="Mike Tarpey's last photo with his UConn crew before graduating."
        >
          <p>Portal to the amazing things that my friends are creating.</p>
          <InternalButton
            label="learn more"
            url="/friends"
            kind="light"
            width="100%"
          />
        </NavCard>
        <NavCard
          internal={false}
          label="apps"
          imagesrc="/images/raw/tarpeydevog.png"
          imagealt="Screenshot of some JavaScript code."
        >
          <p>
            My app sandbox. Game backlog, March Madness, stats for Mildred
            League, and more...
          </p>
          <ExternalButton
            label="visit tarpey.dev"
            url="https://tarpey.dev"
            kind="light"
            width="100%"
          />
        </NavCard>
        <NavCard
          internal={false}
          label="blog"
          imagesrc="/images/raw/cat-blogger-hype.jpg"
          imagealt="A cat standing on Mike Tarpey's laptop keyboard."
        >
          <p>Ideas and solutions from my day-to-day.</p>
          <ExternalButton
            label="visit medium.com"
            url="https://miketarpey.medium.com/"
            kind="light"
            width="100%"
          />
        </NavCard>
        <NavCard
          internal={true}
          label="credits"
          imagesrc="/images/raw/baxter-bravo-stack.jpg"
          imagealt="The dogs Baxter and Bravo hanging out in the backyard, one stacked on top of the other."
        >
          <p>The technologies that currently make this site possible.</p>
          <InternalButton
            label="view credits"
            url="/credits"
            kind="light"
            width="100%"
          />
        </NavCard>
      </IndexCardGrid>
    </NewLayout>
  )
}
