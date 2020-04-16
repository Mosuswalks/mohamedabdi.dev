import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Col, Row, Menu } from "antd"
import { Link } from "gatsby"
import Avatar from "../../images/avatar.svg"

import styles from "./navigation.module.less"

const MainNav = () => {
  return (
    <div>
      <Row>
        <Col xs={2} lg={{ offset: 4 }}>
          <Avatar className={styles.avatar} />
        </Col>
        <Col lg={{ offset: 11 }}>
          <Menu mode="horizontal">
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Projects</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default MainNav
