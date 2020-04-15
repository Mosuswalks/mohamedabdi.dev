import React from "react"
import { Divider, Row, Col, Card } from "antd"
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons"
import Image from "../components/Image"
import Snkrs from "../images/snkrs.svg"

import { theme } from "../../config"

const Projects = ({ children, project }) => {
  return (
    <div className="project-section">
      <Row style={{ width: "100%" }}>
        <Col lg={16} md={14} sm={24} xs={24}>
          {project.img === "covid-frame.png" ? (
            <Image imgName={project.img} className="project-img" />
          ) : (
            <Snkrs
              className="project-img"
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </Col>
        <Col lg={8} md={10} sm={24} xs={24}>
          <div className="project-container">
            {project.name}
            <div className="project-madeAt">
              {project.personal ? null : "Made At "}
              <span className="company">{project.madeAt}</span>
            </div>
            <div className="project-description">{children}</div>
            <div className="project-tool">
              {project.tools.map((txt, idx) => {
                return <div key={idx}>{txt}</div>
              })}
            </div>
            <div className="project-link">
              {project.liveSite ? (
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icons"
                >
                  <DesktopOutlined />
                </a>
              ) : null}
              <a href={project.link}>
                <GithubOutlined
                  className="icons"
                  onClick={() => window.open(project.link, "_blank")}
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <style jsx>
        {`
          .project-link {
            margin-top: 5%;
          }
          .project-madeAt {
            font-size: 17px;
          }
          .project-madeAt {
            font-weight: normal;
            font-size: 22px;
          }
          .project-description {
            border-radius: 10px;
            text-align: left;
            font-size: 15px;
            font-weight: normal;
            z-index: 10;
            width: 140%;
            margin: 25px 0 0 -40%;
            padding: 20px;
            background-color: rgb(23, 42, 69);
            box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
          }

          .icons {
            padding: 20%;
          }

          .link-svg {
            width: 22px;
          }
          .link-svg:hover {
            cursor: pointer;
            transform: scale(1.2);
          }
          .project-tool {
            justify-content: space-between;
            text-align: right;
            width: 110%;
            margin-left: -10%;
            margin-top: 15px;
            flex-direction: row;
            display: flex;
            font-size: 15px;
          }
          .company {
            color: rgb(100, 255, 218);
            font-weight: "bold";
          }
          .project-section {
            margin-top: 40px;
          }
          .project-img {
            width: 85%;
          }
          .project-container {
            margin-top: 10%;
            font-size: 22px;
            text-align: right;
          }
          .company {
            font-weight: bold;
          }

          @media (min-width: 80em) and (max-width: 119em) {
            .project-tool {
              font-size: 12px;
            }
            .project-description {
              font-size: 13.5px;
              margin-top: 5%;
            }
            .project-container {
              margin-top: 15px;
              font-size: 22px;
              text-align: right;
            }
          }

          @media (min-width: 160em) {
            .project-tool {
              font-size: 17px;
            }
            .project-description {
              font-size: 18.5px;
            }
          }

          @media (max-width: 480px) {
            .project-img {
              width: 100%;
            }
            .project-link {
              display: flex;
              margin-top: 12.5px;
              justify-content: flex-end;
            }
            .project-container {
              text-align: left;
              font-size: 20px;
              margin: 0;
              padding: 5%;
              background-color: rgb(23, 42, 69);
              box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
            }
            .project-description {
              box-shadow: none;
              padding: 0;
              width: 100%;
              margin: 10px 0;
            }
            .project-tool {
              width: 100%;
              margin-left: 0;
              font-size: 12.5px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Projects
