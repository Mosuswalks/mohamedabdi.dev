import React from 'react'
import { Divider, Row, Col } from 'antd'
import { theme } from '../../config'
const Projects = ({ children }) => {

    return(
        <section className='main-container' id='projects'>
            <div className='container'>
                <Row>
                    <Col offset={2} lg={20}>
            <Divider orientation='left'>
                <span style={{ color: theme.color.secondary }}>03.</span> 
                <span className='intro-text intro-text'>Projects</span>
            </Divider>
            </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
            </div>
            </section>
        
    )
}

export default Projects