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
