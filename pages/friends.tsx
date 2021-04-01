import React from "react"
import NewLayout from "../components/layout"
import { NavCard } from "../components/content-cards"
import { IndexCardGrid } from "../components/content-wrappers"
import { OutboundButton } from "../components/buttons"

export default function Home() {
  return (
    <NewLayout
      titleTwo=" - friends"
      description="Portal to the amazing things that Mike Tarpey's friends are creating."
      url="https://miketarpey.com/friends"
      h1text="friends"
    >
      <IndexCardGrid>
        <NavCard
          internal={false}
          label="trevor wentt"
          imagesrc="/images/raw/trevor-wentt-freshness-45.jpg"
          imagealt="Trevor Wentt standing at the corner of a downtown intersection."
          gridrowcss="5fr 1fr 2fr 1fr"
        >
          <h5>
            He makes art to challenge perspectives and give hope to the
            marginalized and oppressed.
          </h5>
          <OutboundButton
            label="visit trevorwentt.com"
            url="https://trevorwentt.com/"
            kind="light"
            width="100%"
          />
        </NavCard>
        <NavCard
          internal={false}
          label="constant content"
          imagesrc="/images/raw/cc-crown-grab.png"
          imagealt="A Fall Guys character grabbing the Fall Mountain crown for the win!"
          gridrowcss="5fr 1fr 2fr 1fr"
        >
          <h5>Bad memes and nonstop emotes...we have fun here.</h5>
          <OutboundButton
            label="join the discord"
            url="https://discord.com/invite/bVDZfNe"
            kind="light"
            width="100%"
          />
        </NavCard>
      </IndexCardGrid>
    </NewLayout>
  )
}
