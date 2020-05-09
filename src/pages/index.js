import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, About, Projects, Contact } from "../sections"

import "./global.css"

const IndexPage = () => {
    return (
        <Layout className="container">
            <SEO title="Home" />
            <Hero className="child" />
            <About className="child" />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default IndexPage
