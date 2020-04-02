import React from 'react'
import { Col, Row } from 'antd'

import { theme } from '../../config'


const skills = {
    front: [
      'JavaScript (ES6+)',
      'React Native',
      'Reactjs',
      'Nextjs'
    ],
    back: [
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Firebase'
    ]
  }

const About = ({ children }) => {

    return(
        <div className='intro-text section-container'>
            <span style={{ color: theme.color.secondary }}>01.</span> About Me
            {children}
            <Row className='stack-text'>
                <Col lg={9} xs={14}>
                <ul className='stack-text'>
                    {skills.back.map(skill => <li>{skill}</li>)}
                </ul>
                </Col>
                <Col lg={9} xs={10}>
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
                }
                .intro-text {
                    color: rgb(204, 214, 246);
                    font-weight: bold;
                    font-size: 25px;
                    padding: 7% 7%;
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