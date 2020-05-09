import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => {
    return (
        <div className="antialiased text-gray-900">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
