import React from 'react'
import { Col, Row, Divider } from 'antd'
import NodeJS  from '../images/NodeJS.svg'
import MongoDB from '../images/MongoDB.svg'
import Gatsby from '../images/GatsbyLogo.svg'
import GraphQL from '../images/GraphQL.svg'
import { theme } from '../../config'


const skills = {
    front: [
        
        
        <Gatsby className='logo' />
    ],
    back: [
      <MongoDB className='logo' />,
     
      <GraphQL className='logo graphql' />
    ]
  }

const About = ({ children }) => {

    return(
        <div className='intro-text section-container'>
            <Divider orientation='left' 
                     style={{ fontSize: '3rem'}}>
                        <span style={{ color: theme.color.secondary }}>01.</span> <span className='intro-text'>About Me</span>
            </Divider>
            {children}
            <Row className='stack-text'>
                <Col lg={12} xs={14}>
                <ul className='stack-text'>
                    {skills.front.map(skill => <li>{skill}</li>)}
                </ul>
                </Col>
                <Col lg={12} xs={10}>
                <ul className='stack-text'>
                  
                    {skills.back.map(skill => <li>{skill}</li>)}
                </ul>
                </Col>
            </Row>

            <style jsx>
                {`
                ul {
                    padding: 0 0 0 25px;
                }
                .stack-text {
                    margin-top: 30px;
                    font-size: 18px;
                    list-style: none;
                }
                .intro-text {
                    color: rgb(204, 214, 246);
                    font-weight: bold;
                    font-size: 25px;
                    padding: 7% 7%;
                }
                .logo {
                    height: 2em;
                }
                @media (max-width: 65em) {
                    .intro-text {
                    padding: 3% 5%;
                    font-size: 22px;
                    }
                    .stack-text {
                    font-size: 15px;
                    }
                    .section-container {
                    margin: 0% 5%;
                    }
                }
                `}
      </style>
        </div>

        

    )
}

export default About