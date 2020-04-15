import React from "react"
import { Row, Col, Divider, Card } from "antd"
import ExperienceCard from "../components/ExperienceCard"

import { theme } from "../../config"

const Experience = () => {
  return (
    <section className="main-container" id="experience">
      <div className="container">
        <Divider orientation="left" style={{ fontSize: "2rem" }}>
          <span style={{ color: theme.color.secondary }}>02.</span>{" "}
          <span className="intro-text intro-text">Work Experience</span>
        </Divider>
        <Row gutter={16}>
          <Col lg={{ span: 8 }} md={24} xs={24}>
            <ExperienceCard
              title={"Technical Expert"}
              company={"Apple"}
              role={"Techical Expert"}
            />
          </Col>
          <Col lg={{ span: 8 }} md={24} xs={24}>
            <Card>
              <div className="intro-text work-container">
                Ontario College of Trades
                <div className="work-tabs">
                  <span>Software Development Intern</span> @ OCOT
                </div>
                <div style={{ fontWeight: "normal", fontSize: "18px" }}>
                  July 2019 - Dec 2019
                </div>
              </div>
              <br />
              <br />
              <br />
            </Card>
          </Col>
          <Col lg={{ span: 8 }} md={24} xs={24}>
            <Card>
              <div className="intro-text work-container">
                Pfaff Automotive Group
                <div className="work-tabs">
                  <span style={{ color: "#f4f4f4" }}>Technical Expert</span> @
                  Apple Canada
                </div>
                <div style={{ fontWeight: "normal", fontSize: "18px" }}>
                  July 2019 - Dec 2019
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Experience
