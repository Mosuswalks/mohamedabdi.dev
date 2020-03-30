/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Layout, Menu } from "antd"
import { useStaticQuery, graphql } from "gatsby"

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import "./layout.css"

const PageLayout = ({ children }) => {
  

const { Header, Footer, Sider, Content } = Layout;

  return (
    <div>
      <Layout>
        <Sider>
          <Menu theme='dark' mode='inline'>
            <Menu.Item key="1">
            <UserOutlined />
            <span className="nav-text">nav 1</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
