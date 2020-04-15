import React from "react"
import { Divider, Row, Col } from "antd"
import { theme } from "../../config"

const Projects = ({ children }) => {
  return (
    <section className="main-container" id="projects">
      <div className="container">
        <Divider orientation="left" style={{ fontSize: "2rem" }}>
          <span style={{ color: theme.color.secondary }}>02.</span>{" "}
          <span className="divider-text">Projects</span>
        </Divider>
        <Row>
          <Col offset={2} lg={20}></Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </div>
      <style jsx>{`
        .divider-text {
          color: rgb(204, 214, 246);
          font-weight: bold;
          font-size: 25px;
        }
      `}</style>
    </section>
  )
}

export default Projects
