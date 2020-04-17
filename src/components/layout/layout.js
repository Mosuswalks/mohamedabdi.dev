import React from "react"
import { Layout } from "antd"
import MainNav from "../navigation/MainNav"

import styles from "./layout.module.less"

const { Header, Content, Footer } = Layout

const PageLayout = ({ children }) => {
  return (
    <Layout id="page-wrap">
      <Header className={styles.header}>
        <MainNav />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer} />
    </Layout>
  )
}

export default PageLayout
