import React, { useState } from "react"
import { Row, Col, Divider } from "antd"
import PageLayout from "../components/layout"
import Intro from "../sections/Intro"
import About from "../sections/About"
import Experience from "../sections/Experience"
import Projects from "../sections/Projects"

import { theme } from "../../config"
import { project } from "../constants"

import SEO from "../components/seo"

import "./global.css"

const IndexPage = () => {
  const [state, setState] = useState({
    color: "#171c28",
    textColor: "#fff",
    darkMode: true,
  })

  return (
    <PageLayout
      color={state.color}
      darkMode={state.darkMode}
      textColor={state.textColor}
    >
      <SEO title="Home" />
      <section className="main-container">
        <Intro />
      </section>

      <Row>
        <Col lg={{ span: 16, offset: 4 }}>
          <About>
            <div className="describe-me">
              Hello! I'm Mohamed, a Software Developer who
              <span style={{ color: theme.color.secondary }}>
                {" "}
                recently just graduated from George Brown College
              </span>{" "}
              with a Advanced Diploma in Computer Programming. I have experience
              developing and (occasionally) designing software for both web and
              mobile application.
              <br /> <br />
              I love learning new things and have a strong interest in projects
              that require both conceptual and analytical thinking to solve
              them. I aspire towards a career that will allow me to channel my
              ability to the fullest and at the same time grow them. Currently
              based in Toronto, Ontario but i'm willing to move to other parts
              of the world for work.
              <br /> <br />
              Here are some of technologies that i've worked with:
              <br />
            </div>
          </About>
        </Col>
      </Row>
      <section className="box-container" id="projects">
        <Row>
          <div className="intro-text">
            <Projects project={project.covidWatch}>
              Covid-Watch is an e-commerce platform that promote{" "}
              <span style={{ color: theme.color.secondary }}>
                "healthier shopping habits"
              </span>{" "}
              for consumer by providing a carefully curated merchants and
              products on the platform.
            </Projects>
            <Projects project={project.snkrBot}>
              Covid-Watch is an e-commerce platform that promote{" "}
              <span style={{ color: theme.color.secondary }}>
                "healthier shopping habits"
              </span>{" "}
              for consumer by providing a carefully curated merchants and
              products on the platform.
            </Projects>
          </div>
        </Row>
      </section>

      <style jsx>
        {`
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
    </PageLayout>
  )
}

export default IndexPage
