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
        <Col lg={{ offset: 4, span: 7 }}>
          <div className={styles.typedBox}>
            <Typed
              className={styles.introText}
              strings={[
                `Hello, I'm<br /> <span class='name-bracer-left name-brace deselect'>{</span><span class='name-text deselect'>Mohamed Abdi</span><span class='name-bracer-right deselect'>}</span><br /><span class='position-text deselect'>Full Stack Developer</span>`,
              ]}
              typeSpeed={50}
            />
          </div>
        </Col>
        <Col lg={{}}>
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
