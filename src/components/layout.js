/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../components/Header'
import "./layout.css"

const Layout = ({ children, color, darkMode, textColor }) => {
  

const layoutStyle = {
	backgroundColor: color,
    margin: 'auto',
    marginTop: 0,
    marginBottom: 0,
}
  return (
    <div style={layoutStyle}>
      <Header />


      <style jsx global>{`
          body {
            font-family: 'Quicksand', sans-serif;
            margin: 0;
            overflow-x: hidden;
          }
          a {
            font-family: 'Quicksand', sans-serif;
          }
          .container {
            z-index: 10;
            margin: 0 auto;
            width: 100%;
            padding: 0 20px;
          }
          .content {
            display: flex;
            justiy-content: center;
          }
          
        @media (min-width: 85.375em) and (max-width: 119em) {
          .container {
            width: 980px;
          }
        }
          @media (min-width: 120em) {
            .container {
              width: 1180px;
            }
          }
          @media (min-width: 160em) {
            .container {
              width: 1380px;
            }
          }
        `}
        </style>
    </div>
  )
}

// PageLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
