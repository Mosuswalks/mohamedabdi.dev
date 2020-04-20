import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { slide as Slide } from "react-burger-menu"
import { HamburgerSpring } from "react-animated-burgers"
import { Col, Row, Menu, Button } from "antd"
import { UserOutlined, CodeOutlined, MessageOutlined } from "@ant-design/icons"
import { Link } from "gatsby"

import Avatar from "../../images/avatar.svg"

import styles from "./navigation.module.less"

const MainNav = () => {
  const [showMobileMenu, setMobileMenu] = useState(false)

  const openMobileMenu = () => {
    setMobileMenu(!showMobileMenu)
  }

  return (
    <div id="page-wrap">
      <div>
        <Row>
          {/* <Col sm={{ span: 4 }} xs={{}}>
            <Avatar className={styles.avatar} />
          </Col> */}
          <Col lg={{ span: 24 }} med={{ span: 12 }} sm={0} xs={0}>
            <Menu mode="horizontal" className={styles.menu}>
              <Menu.Item>
                <Avatar className={styles.avatar} />
              </Menu.Item>
              <AnchorLink>
                <Menu.Item className={styles.menuRight}>About</Menu.Item>
              </AnchorLink>
              <Menu.Item className={styles.menuRight}>Projects</Menu.Item>
              <Menu.Item className={styles.menuRight}>Contact</Menu.Item>
            </Menu>
          </Col>

          <Col
            xxl={0}
            xl={0}
            lg={0}
            med={0}
            sm={{ offset: 14 }}
            xs={{ offset: 21 }}
          >
            <Slide
              pageWrapId={"page-wrap"}
              outerContainerId={"outer-container"}
              isOpen={showMobileMenu}
              right
              width={280}
              height={300}
              className={styles.slide}
              customBurgerIcon={
                <HamburgerSpring
                  style={{ width: "25px" }}
                  className={styles.hamburger}
                  toggleButton={openMobileMenu}
                  isActive={showMobileMenu}
                  // barColor={"#28c7fa"}
                  barColor={"#28c7fa"}
                />
              }
            >
              <Menu mode="vertical" theme="light" className={styles.mobileMenu}>
                <AnchorLink href="#about">
                  <Menu.Item>
                    <UserOutlined />
                    About
                  </Menu.Item>
                </AnchorLink>
                <AnchorLink href="#projects">
                  <Menu.Item>
                    <CodeOutlined />
                    Projects
                  </Menu.Item>
                </AnchorLink>
                <AnchorLink href="#contacts">
                  <MessageOutlined />
                  Contact
                </AnchorLink>
              </Menu>
            </Slide>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainNav
