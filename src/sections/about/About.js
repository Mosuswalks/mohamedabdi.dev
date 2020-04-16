import React from "react"
import { Col, Row, Typography, Card, Space } from "antd"

import Avatar from "../../images/avatar.svg"
// import Blob from "../../images/blob-shape2.svg"
import styles from "./about.module.less"

const { Title, Paragraph, Text } = Typography

const About = ({ children }) => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.blob}>
        <Blob />
      </div> */}
      <div className={styles.about}>
        <Row>
          <Col lg={{ offset: 3, span: 6 }}>
            <Card>
              <Title level={1} className={styles.title}>
                About
              </Title>
              <Paragraph>This is the Paragraph</Paragraph>
            </Card>
          </Col>

          <Col lg={{ offset: 2, span: 10 }}>
            <Row gutter={16}></Row>

            <Row gutter={16} className={styles.logoRows}></Row>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About
