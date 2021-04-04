import React from "react"
import SEO from "./seo"
import NewHeader from "./header"
import NewFooter from "./footer"

interface LayoutProps {
  titleTwo?: string
  description?: string
  url?: string
  urlImage?: string
  h1text: string
  currentPage: string
  children: React.ReactNode
}

const NewLayout = ({
  titleTwo = "",
  description,
  url,
  urlImage,
  h1text,
  currentPage,
  children,
}: LayoutProps) => (
  <React.Fragment>
    <SEO
      titleTwo={titleTwo}
      description={description}
      url={url}
      urlImage={urlImage}
    />
    <NewHeader h1text={h1text} currentPage={currentPage} />
    <main>{children}</main>
  </React.Fragment>
)

export default NewLayout
