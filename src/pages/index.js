import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, Projects } from "../sections"

import "./global.css"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero />
            <Projects />
        </Layout>
    )
}

export default IndexPage
