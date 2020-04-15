import React from "react"
import { Layout } from "antd"
import Menu from "./Menu"
// import Footer from "./Footer"

const { Header, Content, Footer } = Layout

const PageLayout = ({ children, color, darkMode, textColor }) => {
  const layoutStyle = {
    backgroundColor: color,
    margin: "auto",
    marginTop: 0,
    marginBottom: 0,
  }
  return (
    <Layout style={{ backgroundColor: `${color}` }}>
      <Header style={{ backgroundColor: `${color}` }}>
        <Menu color={color} textColor={textColor} />
      </Header>
      <Content>{children}</Content>
      <Footer style={{ backgroundColor: `${color}` }} />

      <style jsx global>
        {`
          body {
            font-family: "Quicksand", sans-serif;
            margin: 0;
            overflow-x: hidden;
          }
          a {
            font-family: "Quicksand", sans-serif;
          }
          .container {
            z-index: 10;
            margin: 0 auto;
            width: 100%;
            padding: 0 20px;
          }
          .content {
            display: flex;
            justiy-content: center;
          }
          .ant-layout {
            backgroundcolor: ${color};
          }

          .ant-header {
            backgroundcolor: ${color};
          }

          @media (min-width: 85.375em) and (max-width: 119em) {
            .container {
              width: 980px;
            }
          }
          @media (min-width: 120em) {
            .container {
              width: 1180px;
            }
          }
          @media (min-width: 160em) {
            .container {
              width: 1380px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default PageLayout
