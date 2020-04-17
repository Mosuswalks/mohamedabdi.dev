import React from "react"
import { Divider, Row, Col, Card, Space } from "antd"

import styles from "./projects.module.less"

const Projects = () => {
  return (
    <section className={styles.container}>
      <div>
        <Row>
          <Col xs={{ offset: 2, span: 16 }}>
            <Card className={styles.cards} title="Project 1">
              lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam mauris felis, elementum in porta mollis, vestibulum at
              ex. Curabitur euismod ante lorem, eu hendrerit leo semper euismod.
              Mauris viverra nibh dui, sed pretium mauris ultricies a. Nullam
              tortor velit, rutrum eu augue quis, commodo tempor ante.
            </Card>
          </Col>
          <div clasName={styles.secondStripe}>
            <Col xs={{ offset: 6, span: 16 }} className={styles.col}>
              <div clasName={styles.secondStripe}>
                <Card className={styles.cards} title="Project 2">
                  lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nam mauris felis, elementum in porta mollis, vestibulum
                  at ex. Curabitur euismod ante lorem, eu hendrerit leo semper
                  euismod. Mauris viverra nibh dui, sed pretium mauris ultricies
                  a. Nullam tortor velit, rutrum eu augue quis, commodo tempor
                  ante.
                </Card>
              </div>
            </Col>
          </div>
          <Col xs={{ offset: 2, span: 16 }} className={styles.col}>
            <Card className={styles.cards} title="Project 3">
              lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam mauris felis, elementum in porta mollis, vestibulum at
              ex. Curabitur euismod ante lorem, eu hendrerit leo semper euismod.
              Mauris viverra nibh dui, sed pretium mauris ultricies a. Nullam
              tortor velit, rutrum eu augue quis, commodo tempor ante.
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Projects
