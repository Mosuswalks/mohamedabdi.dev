import React from "react"
import { Col, Row, Button, Typography } from "antd"
import Typed from "react-typed"

import Wave from "../../images/navyway.svg"
import Wave2 from "../../images/navyway2.svg"
import Wave3 from "../../images/navyway3.svg"
import Blob from "../../images/blob-shape.svg"
import Coding from "../../images/coding.svg"

import styles from "./intro.module.less"

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container}>
        <Row>
          <Col xs={{ offset: 2 }} sm={{ span: 12 }}>
            <div className={styles.typedBox}>
              <Typed
                className={styles.introText}
                strings={[
                  `Hello, I'm<br /><span class=${styles.nameText}>Mohamed Abdi</span><br /><span class='position-text deselect'>Full Stack Developer</span>`,
                ]}
                typeSpeed={50}
              />
            </div>
          </Col>
          <Col lg={{ span: 9 }} sm={{ span: 12 }} xs={0}>
            <Coding className={styles.coding} />
          </Col>
        </Row>
        {/* <Row>
          <Wave className={styles.wave} />
          <Wave2 className={styles.wave2} />
        </Row> */}
      </div>
      <Row>
        <Wave className={styles.wave} />
        <Wave2 className={styles.wave2} />
        <Wave3 className={styles.wave3} />
      </Row>
    </section>
  )
}

export default Intro
