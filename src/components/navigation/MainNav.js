import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { slide as Slide } from "react-burger-menu"
import { Col, Row, Menu, Button } from "antd"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Link } from "gatsby"

import Avatar from "../../images/avatar.svg"

import styles from "./navigation.module.less"

const MainNav = () => {
  const [showMobileMenu, setMobileMenu] = useState(false)

  const openMobileMenu = () => {
    setMobileMenu(!showMobileMenu)
  }

  return (
    <div>
      <Row>
        <Col xs={{ offset: 2 }} lg={{ offset: 3 }}>
          <Avatar className={styles.avatar} />
        </Col>
        <Col lg={{ offset: 11 }} sm={0} xs={0}>
          <Menu mode="horizontal">
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Projects</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Col>
        <Col lg={0} med={0} sm={{ offset: 6 }} xs={{ offset: 15 }}>
          <Button
            size="large"
            onClick={openMobileMenu}
            className={styles.hambuger}
          >
            <MenuOutlined />
          </Button>
        </Col>

        <Slide right isOpen={showMobileMenu} width={280} height={300}>
          <Menu mode="vertical" theme="dark" className={styles.mobileMenu}>
            <Row>
              <Col offset={21}>
                <CloseOutlined onClick={openMobileMenu} />
              </Col>
            </Row>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Projects</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Slide>
      </Row>
    </div>
  )
}

export default MainNav
