import React from "react"
import { Col, Row, Typography, Card, Space } from "antd"

import Avatar from "../../images/avatar.svg"
import Blob from "../../images/blob-shape2.svg"
import styles from "./about.module.less"

import {
  NodeJS,
  JavaScript,
  TypeScript,
  MongoDB,
  Apollo,
  Graphql,
} from "../../images/logos"
const { Title, Paragraph, Text } = Typography

const About = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.blob}>
        <Blob />
      </div>
      <div className={styles.about}>
        <Row>
          <Col lg={{ offset: 3, span: 6 }}>
            <Title level={1} className={styles.title}>
              About
            </Title>
            <Paragraph>This is the Paragraph</Paragraph>
          </Col>
          <Col lg={{ offset: 2, span: 10 }}>
            <Row gutter={16}>
              <Col lg={8}>
                <div className={styles.techLogos}>
                  <JavaScript />
                </div>
              </Col>
              <Col lg={8}>
                <div className={styles.techLogos}>
                  <NodeJS />
                </div>
              </Col>
              <Col lg={8}>
                <div className={styles.techLogos}>
                  <TypeScript />
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={8}>
                <div className={styles.techLogos}>{/* <Graphql /> */}</div>
              </Col>
              <Col lg={8}>
                <div className={styles.techLogos}>{/* <MongoDB /> */}</div>
              </Col>
              <Col lg={8}>
                <div className={styles.techLogos}>
                  <Apollo />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About
