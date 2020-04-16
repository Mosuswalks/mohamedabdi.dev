import React from "react"
import { Col, Row, Button, Typography } from "antd"
import Typed from "react-typed"

import Wave from "../../images/wave.svg"
import Blob from "../../images/blob-shape.svg"
import Coding from "../../images/coding.svg"

import styles from "./intro.module.less"

const Intro = () => {
  return (
    <section className={styles.container}>
      <Row>
        <Col lg={{ offset: 3, span: 10 }}>
          <div className={styles.typedBox}>
            <Typed
              className={styles.introText}
              strings={[
                `Hello, I'm<br /> <span class=${styles.nameBrace}>{</span><span class=${styles.nameText}>Mohamed Abdi</span><span class=${styles.nameBrace}>}</span><br /><span class='position-text deselect'>Full Stack Developer</span>`,
              ]}
              typeSpeed={50}
            />
          </div>
        </Col>
        <Col lg={{ span: 9 }}>
          <Coding className={styles.coding} />
        </Col>
      </Row>
      <Row>
        <Wave className={styles.wave} />
      </Row>
    </section>
  )
}

export default Intro
