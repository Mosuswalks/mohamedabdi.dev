import React, { useState } from "react"
import { Row, Col } from 'antd'
import Layout  from "../components/layout"
import Intro from '../sections/Intro'
import { theme } from '../../config'

import SEO from "../components/seo"

import './global.css'


const IndexPage = () => {
  const [state, setState] = useState({
    color: '#171c28',
    textColor: '#fff',
    darkMode: true
  })

  return (
    <Layout color={state.color} darkMode={state.darkMode} textColor={state.textColor}>
      <SEO title="Home" />
      <section className='main-container'>
		<Intro />
      </section>
	  




	  <style jsx>{`
        ul {
          padding: 0 0 0 25px;
          position: left;
        }
        h1 {
          margin: 0;
        }
        .email-button {
          font-size: 20px;
          display: inline-block;
          margin-top: 10%;
          border-radius: 5px;
          border: 2px solid ${theme.color.secondary};
          color: ${theme.color.secondary};
          padding: 2% 5%;
        }
        .email-button:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
        .link-svg {
          width: 22px;
        }
        .center-text {
          text-align: center;
        }
        .link-svg:hover {
          cursor: pointer;
          transform: scale(1.2);
        }
        .witty-list {
          float: left;
          margin-top: 10px;
          font-size: 17.5px;
        }
        .work-tabs {
          margin-top: 25px;
          font-size: 18pt;
          color: rgb(100, 255, 218);
        }
        .intro-text {
          color: rgb(204, 214, 246);
          font-weight: bold;
          font-size: 25px;
          padding: 7% 7%;
        }
        @media (max-width: 480px) {
          .intro-text {
            padding: 3% 5%;
            font-size: 22px;
          }
          .witty-list {
            font-size: 15px;
          }
          .work-tabs {
            font-size: 20px;
          }
          .work-container {
            margin: 0% 5%;
          }
          .section-container {
            margin: 0% 5%;
          }
        }
        `}
      </style>
    </Layout>
  )
}

export default IndexPage
