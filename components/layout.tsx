import React from "react"
import SEO from "./seo"
import NewHeader from "./header"

interface LayoutProps {
  titleTwo?: string
  description?: string
  url?: string
  urlImage?: string
  h1text: string
  children: React.ReactNode
}

const NewLayout = ({
  titleTwo = "",
  description,
  url,
  urlImage,
  h1text,
  children,
}: LayoutProps) => (
  <React.Fragment>
    <SEO
      titleTwo={titleTwo}
      description={description}
      url={url}
      urlImage={urlImage}
    />
    <NewHeader h1text={h1text} />
    <main>{children}</main>
  </React.Fragment>
)

export default NewLayout
