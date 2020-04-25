import React, { useState, useRef, useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { slide as Slide } from "react-burger-menu"
import { HamburgerSpring } from "react-animated-burgers"
import { Col, Row, Menu } from "antd"
import { UserOutlined, CodeOutlined, MessageOutlined } from "@ant-design/icons"

import styles from "./navigation.module.less"

const MainNav = () => {
  const [showMobileMenu, setMobileMenu] = useState(false)
  const [navBackground, setNavBackground] = useState(false)

  const navRef = useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = event => {
      const show = window.scrollY > 600

      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, 100)

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
          <Col lg={{ span: 8 }} med={{ span: 12 }} sm={0} xs={0}>
            <Menu
              mode="horizontal"
              className={styles.menu}
              style={{
                transition: "1s ease",
                background: navBackground ? "#3d5af1" : "transparent",
                color: navBackground ? "#fff" : "#000",
              }}
            >
              <Menu.Item icon={<UserOutlined />}>About</Menu.Item>

              <Menu.Item icon={<CodeOutlined />}>Projects</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu>
          </Col>

          <Col
            xxl={0}
            xl={0}
            lg={0}
            med={0}
            sm={{ offset: 14 }}
            xs={{ offset: 20 }}
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
              <Menu mode="vertical" theme="dark" className={styles.mobileMenu}>
                <Menu.Item>
                  <AnchorLink href="#about">
                    <UserOutlined />
                    About
                  </AnchorLink>
                </Menu.Item>
                <Menu.Item>
                  <AnchorLink href="#projects">
                    <CodeOutlined />
                    Projects
                  </AnchorLink>
                </Menu.Item>
                <Menu.Item>
                  <AnchorLink href="#contact">
                    <MessageOutlined />
                    Contact
                  </AnchorLink>
                </Menu.Item>
              </Menu>
            </Slide>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainNav
