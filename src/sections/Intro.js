import React from "react"
import { Col, Row, Button } from "antd"
import Typed from "react-typed"
import { DownloadOutlined } from "@ant-design/icons"
import Laptop from "../images/laptop.svg"
import Resume from "../pages/file/resume.pdf"

const Intro = () => {
  return (
    <Row className="body-width">
      <div className="long-line" />
      <Col lg={12} md={24} sm={24} xs={24}>
        <div className="typed-box">
          <Typed
            className={"hello-text"}
            strings={[
              `Hello, I'm<br /> <span class='name-bracer-left name-brace deselect'>{</span><span class='name-text deselect'>Mohamed Abdi</span><span class='name-bracer-right deselect'>}</span><br /><span class='position-text deselect'>Full Stack Developer</span>`,
            ]}
            typeSpeed={60}
          />
          <div>
            <Button
              className="resume-btn"
              size="large"
              shape="round"
              href={Resume}
            >
              <DownloadOutlined style={{ fontSize: "1.5em" }} />
              Download Résumé
            </Button>
          </div>
        </div>
      </Col>
      <Col lg={12} md={0} sm={0} xs={0}>
        <div>
          <Laptop className="main-image" />
        </div>
      </Col>

      <style jsx>
        {`
          .typed-box {
            white-space: nowrap;
            padding-top: 20%;
          }
          .name-brace {
            font-weight: bold;
          }
          .name-bracer-left {
            color: #fff;
            margin-right: 7px;
          }
          .name-bracer-right {
            margin-left: 20px;
            color: #fff;
            font-weight: bold;
          }
        `}
      </style>
    </Row>
  )
}

export default Intro
