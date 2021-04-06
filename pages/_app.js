import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useEffect } from "react"
import { useRouter } from "next/router"
import * as gtag from "../utils/gtag"
import "../styles/global.css"

const theme = {
  gradients: {
    main:
      "conic-gradient(from 225deg at -100px -100px, " +
      "#20b2aa, #135da5, #0d0895, #4b0082, #4b0082, #0d0895, #135da5, #20b2aa)",
    highlight:
      "conic-gradient(at 0% 100%, #b78cf7, #ff7c94, #ffcf0d, #ff7c94, #b78cf7)",
    buttonLight: "linear-gradient(180deg, #ffccd5, #ff8097)",
    buttonLightHover: "linear-gradient(180deg, #ff8097, #ffccd5)",
    buttonDark: "linear-gradient(180deg, #99001c, #4d000e)",
    buttonDarkHover: "linear-gradient(180deg, #4d000e, #99001c)",
  },
  glass: {
    basic: "rgba(255, 255, 255, 0.25)",
    basicHover: "rgba(255, 255, 255, 0.35)",
    basicBorder: "rgba(255, 255, 255, 0.18)",
    inverted: "rgba(255, 255, 255, 0.75)",
    invertedHover: "rgba(255, 255, 255, 0.65)",
    invertedBorder: "rgba(255, 255, 255, 0.82)",
    projects: "rgba(255, 124, 148, 0.25)",
    projectsHover: "rgba(255, 124, 148, 0.35)",
    projectsBorder: "rgba(255, 124, 148, 0.18)",
    resume: "rgba(183, 140, 247, 0.25)",
    resumeHover: "rgba(183, 140, 247, 0.35)",
    resumeBorder: "rgba(183, 140, 247, 0.18)",
  },
}

// https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics
const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
