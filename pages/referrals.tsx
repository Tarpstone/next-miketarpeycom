import React from "react"
import NewLayout from "../components/layout"
import { NoPicNavCard } from "../components/content-cards"
import { IndexCardGrid } from "../components/content-wrappers"
import { ExternalButton } from "../components/buttons"

export default function Home() {
  return (
    <NewLayout
      titleTwo=" - referrals"
      description="Referral links to some of Mike Tarpey's most-used services."
      url="https://miketarpey.com/referrals"
      h1text="referrals"
      currentPage="referrals"
    >
      <IndexCardGrid>
        <NoPicNavCard
          internal={false}
          label="DollarShaveClub"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>
            Favorite razor since the UConn days.
          </h5>
          <ExternalButton
            label="visit dollarshaveclub.com"
            url="http://shaved.by/lfiQl"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Second Nature"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Subscription air filters for your home.</h5>
          <ExternalButton
            label="visit secondnature.com"
            url="http://fbuy.me/rCbJC"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Personal Capital"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Track all of your financial accounts in one place.</h5>
          <ExternalButton
            label="visit personalcapital.com"
            url="https://pcap.rocks/m31912"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Binance.US"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>My favorite crypto exchange, with the lowest fees. (Do your own research before investing!)</h5>
          <ExternalButton
            label="visit binance.us"
            url="https://accounts.binance.us/en/register?ref=52573715"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="FanDuel"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>I place all sports bets here. (Please gamble responsibly!)</h5>
          <ExternalButton
            label="visit fanduel.com"
            url="https://account.sportsbook.fanduel.com/join/select-state#RAF=Michael_3702975"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Coinbase Pro"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Second favorite crypto exchange. (I recommend Coinbase Pro - lower fees than vanilla Coinbase!)</h5>
          <ExternalButton
            label="visit coinbase.com"
            url="https://www.coinbase.com/join/5a6eab9d8bf65d0545be6e9a"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="CoinTracker"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Tax tracking for crypto.</h5>
          <ExternalButton
            label="visit cointracker.io"
            url="https://www.cointracker.io/i/NV7md8i4fbmJ"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Fundrise"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Platform for investing in real estate projects without having to be a mogul.</h5>
          <ExternalButton
            label="visit fundrise.com"
            url="https://fundrise.com/r/0o5p5"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Backblaze"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Painless backup of your computer's hard drive. Protect your digital life!</h5>
          <ExternalButton
            label="visit backblaze.com"
            url="https://secure.backblaze.com/r/01bqxp"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
        <NoPicNavCard
          internal={false}
          label="Honey"
          gridrowcss="1fr 1.5fr 1fr"
        >
          <h5>Save money on every internet shopping trip.</h5>
          <ExternalButton
            label="visit joinhoney.com"
            url="https://www.joinhoney.com/ref/zyofyg"
            kind="light"
            width="100%"
          />
        </NoPicNavCard>
      </IndexCardGrid>
    </NewLayout>
  )
}
