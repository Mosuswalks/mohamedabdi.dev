import React from "react"
import { Row, Col, Card, Typography, Divider } from "antd"
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons"
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
              My Work
              <Divider style={{ background: "#000" }} />
            </Title>
          </Col>
        </Row>
        <div className={styles.projectCards}>
          <Row>
            <Col xs={{ span: 24 }} className={styles.col}>
              <Card className={styles.cards} title="Project 1">
                lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nam mauris felis, elementum in porta mollis, vestibulum at
                ex. Curabitur euismod ante lorem, eu hendrerit leo semper
                euismod. Mauris viverra nibh dui, sed pretium mauris ultricies
                a. Nullam tortor velit, rutrum eu augue quis, commodo tempor
                ante.
              </Card>
            </Col>
            <div clasName={styles.secondStripe} />
            <Col xs={{ span: 24 }} className={styles.col}>
              <div clasName={styles.secondStripe}>
                <Card className={styles.cards} title="Project 2">
                  lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nam mauris felis, elementum in porta mollis, vestibulum
                  at ex. Curabitur euismod ante lorem, eu hendrerit leo semper
                  euismod. Mauris viverra nibh dui, sed pretium mauris ultricies
                  a. Nullam tortor velit, rutrum eu augue quis, commodo tempor
                  ante.
                  <Meta title="Last Updated" description={<GithubOutlined />} />
                </Card>
              </div>
            </Col>

            <Col xs={{ span: 24 }} className={styles.col}>
              <Card className={styles.cards} title="Project 3">
                lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nam mauris felis, elementum in porta mollis, vestibulum at
                ex. Curabitur euismod ante lorem, eu hendrerit leo semper
                euismod. Mauris viverra nibh dui, sed pretium mauris ultricies
                a. Nullam tortor velit, rutrum eu augue quis, commodo tempor
                ante.
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Projects
