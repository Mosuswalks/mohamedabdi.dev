import React from 'react'
import { Col, Row } from 'antd'
import Image from '../components/image'

const Intro = () => {
    return(
        <Row className='body-width'>
            <div className='long-line' />
                <Col lg={12} md={24} sm={24} xs={24}>
                    <div className='text-box'>

                        <div className='hello-text deselect'>
                            Hello, I'm
                        </div>

                        <div className='name-text deselect'>
                            <span className='name-bracer-left'>{'{'}</span>
                                <h1 className='name-text deselect'>Mohamed Abdi</h1>
                            <span className='name-bracer-right'>{'}'}</span>
                        </div>

                        <div className='position-text deselect'>Full Stack Developer</div>

                   
                        <Col lg={10} sm={8} xs={15}>
                            <div className='resume-btn' onClick={() => window.open('/file/resume.pdf', '_blank')}>
                                <span style={{ color: '#fff' }}>Grab My Resume</span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={12} sm={0} xs={0}>
                    <div>
                        <Image imgName={'laptop.png'}/>
                    </div>
                </Col>
           
            <style jsx>{`
                h1 {
                margin: 0;
                display: inline-block;
                }
                .name-bracer-left {
                    color: #fff;
                    margin-right: 7px;
                }
                .name-bracer-right {
                    margin-left: 8px;
                    color: #fff;
                }
            `}
            </style>
        </Row>
    )
}

export default Intro