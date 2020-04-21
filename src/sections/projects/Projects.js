import React, { useState, useEffect } from "react"
import { Row, Col, Card, Typography, Divider } from "antd"
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons"
import Image from "../../components/Image"

import { project } from "../../constants"
import Snkrs from "../../images/snkrs.svg"
import Virus from "../../images/virus.svg"
import Js from "../../images/logos/javascript.svg"
import styles from "./projects.module.less"

const { Title } = Typography
const { Meta } = Card

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <Row>
          <Col xs={{ span: 24 }}>
            <Title level={3} className={styles.projectTitle}>
              Projects
              <Divider style={{ background: "#000" }} />
            </Title>
          </Col>
        </Row>

        <div className={styles.projectCards}>
          <Row>
            {Object.values(project).map(project => (
              <Col xs={{ span: 24 }} className={styles.col}>
                <Card className={styles.cards}>
                  {project.img === "virus" ? (
                    <Virus />
                  ) : project.img === "snkrs" ? (
                    <Snkrs />
                  ) : project.img === "JS30" ? (
                    <Js />
                  ) : null}
                  <Title level={4}>{project.name}</Title>
                  {project.description}
                  <Meta description={<GithubOutlined />} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Projects
