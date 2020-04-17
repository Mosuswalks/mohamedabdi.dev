import React from "react"
import { Col, Row, Typography, Card, Space } from "antd"

import Avatar from "../../images/avatar.svg"
import Wave from "../../images/wave2.svg"

import styles from "./about.module.less"

const { Title, Paragraph, Text } = Typography

const About = ({ children }) => {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }}>
            <Card className={styles.aboutCard}>
              <Title level={3} className={styles.cardTitle}>
                About Me
              </Title>
              <Paragraph>
                lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nam mauris felis, elementum in porta mollis, vestibulum at
                ex. Curabitur euismod ante lorem, eu hendrerit leo semper
                euismod. Mauris viverra nibh dui, sed pretium mauris ultricies
                a. Nullam tortor velit, rutrum eu augue quis, commodo tempor
                ante.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
      <Wave className={styles.wave} />
    </section>
  )
}

export default About
