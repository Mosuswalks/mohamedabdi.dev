import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero, About, Projects, Contact } from "../sections"

import "./global.css"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default IndexPage
