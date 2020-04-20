import React from "react"
import { Col, Row, Button, Typography } from "antd"
import Typed from "react-typed"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Wave from "../../images/navyway.svg"
import Wave2 from "../../images/navyway2.svg"
import Wave3 from "../../images/navyway3.svg"
import Blob from "../../images/blob-shape.svg"
import Coding from "../../images/workflow.svg"

import styles from "./intro.module.less"

const Intro = () => {
  return (
    <section className={styles.container}>
      <div>
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
