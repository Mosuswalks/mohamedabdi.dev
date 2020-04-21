import React from "react"
import { Col, Row, Typography, Button, Tooltip } from "antd"
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons"

import styles from "./about.module.less"

const { Title, Paragraph, Text } = Typography

const About = ({ children }) => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.about}>
        <Row>
          <Col xs={{ offset: 2, span: 22 }} sm={{ offset: 4, span: 16 }}>
            <Title level={3} className={styles.aboutTitle}>
              About Me
            </Title>
            <div className={styles.paragraph}>
              <Paragraph>I'm a Full-stack Developer from Toronto.</Paragraph>
              <Paragraph>
                I like creating elegant front ends with modern and clean code.
                I'm currently learning Typescript and the functional programming
                paradigm within Javascript.
              </Paragraph>
              <Paragraph>
                Interested in learning more of the full stack. Currently making
                some small projects with Node.js and Express.
              </Paragraph>
              <Paragraph>
                When I'm not learning one of the above or wrestling with webpack
                I'm usually in the studio painting or on Codewars.
              </Paragraph>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={{ offset: 2 }}>
            <Tooltip title="Github">
              <Button
                onClick={() => {
                  window.open("https://github.com/mosuswalks", "_blank")
                }}
                shape="circle"
                alt="github"
                className={styles.icons}
                icon={<GithubOutlined />}
              />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Linkedin">
              <Button
                onClick={() => {
                  window.open("https://linkedin.com/in/mohamedaabdi", "_blank")
                }}
                shape="circle"
                alt="linkedin"
                className={styles.icons}
                icon={<LinkedinOutlined />}
              />
            </Tooltip>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About
