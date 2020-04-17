import React from "react"
import { Divider, Row, Col, Card, Space } from "antd"

import styles from "./projects.module.less"

const Projects = () => {
  return (
    <section className={styles.container}>
      <div>
        <Row>
          <Col xs={{ offset: 8, span: 16 }} className={styles.col}>
            <Card className={styles.cards} title="Project 1"></Card>
          </Col>

          <Col xs={{ offset: 0, span: 16 }} className={styles.col}>
            <Card className={styles.cards} title="Project 2">
              Testing one two three four five{" "}
            </Card>
          </Col>

          <Col xs={{ offset: 8, span: 16 }} className={styles.col}>
            <Card className={styles.cards} title="Project 3"></Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Projects
