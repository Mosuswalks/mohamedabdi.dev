import React, { useState, useEffect } from "react"
import { Row, Col, Card, Typography, Divider, Button, Tooltip } from "antd"
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons"

import { project } from "../../constants"
import Snkrs from "../../images/snkrs.svg"
import Virus from "../../images/virus.svg"
import Js from "../../images/logos/javascript.svg"
import styles from "./projects.module.less"

const { Title } = Typography

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
          <Row gutter={16}>
            {Object.values(project).map(project => (
              <Col
                xs={{ span: 24 }}
                lg={8}
                className={styles.col}
                key={project.name}
              >
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
                  <div className={styles.projectIconsDiv}>
                    <Row gutter={8}>
                      <Col>
                        <Tooltip title="Github">
                          <Button
                            className={styles.iconButtons}
                            onClick={() => {
                              window.open(`${project.github}`, "__blank")
                            }}
                            shape="circle"
                            icon={<GithubOutlined />}
                          />
                        </Tooltip>
                      </Col>

                      {project.liveSite ? (
                        <Col>
                          <Tooltip title="Visit Site">
                            <Button
                              className={styles.iconButtons}
                              onClick={() => {
                                window.open(`${project.siteLink}`, "__blank")
                              }}
                              shape="circle"
                              icon={<DesktopOutlined />}
                            />
                          </Tooltip>
                        </Col>
                      ) : null}
                    </Row>
                  </div>
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
