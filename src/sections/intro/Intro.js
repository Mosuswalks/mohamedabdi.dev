import React from "react"
import { Col, Row, Button } from "antd"
import { DownloadOutlined } from "@ant-design/icons"
import Typed from "react-typed"
import Img from "gatsby-image"

import Coding from "../../images/workflow.svg"

import styles from "./intro.module.less"

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <Row>
          <Col
            xs={{ offset: 3, span: 20 }}
            sm={{ span: 12 }}
            md={{}}
            lg={{ offset: 4, span: 8 }}
          >
            <div className={styles.typedBox}>
              <Typed
                className={styles.introText}
                strings={[
                  `<span class=${styles.handWave}>👋🏾</span> Hello, I'm<br /><span class=${styles.nameText}>Mohamed Abdi</span><br /><span class='position-text deselect'>Full Stack Developer</span>`,
                ]}
                typeSpeed={50}
              />
              <br />
              <Button
                shape="round"
                size="large"
                className={styles.resumeButton}
                onClick={() => {
                  window.open("../../pages/file/resume.pdf")
                }}
              >
                <DownloadOutlined />
                Resume
              </Button>
            </div>
          </Col>
          <Col lg={{}} sm={{}} xs={0}>
            <Coding className={styles.coding} />
          </Col>
        </Row>
      </div>
      {/* <Row>
        <Wave className={styles.wave} />
        <Wave2 className={styles.wave2} />
        <Wave3 className={styles.wave3} />
      </Row> */}
    </section>
  )
}

export default Intro
