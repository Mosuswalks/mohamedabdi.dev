import React, { useState } from "react"
import { Row, Col, Divider } from "antd"
import { PageLayout } from "../components"
import { Intro, About } from "../sections"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <PageLayout id="outer-container">
      <SEO title="Home" />
      <Intro />
      <About />
    </PageLayout>
  )
}

export default IndexPage
