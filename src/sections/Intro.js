import React from 'react'
import { Col, Row } from 'antd'
import Typed from 'react-typed'
import { DownloadOutlined } from '@ant-design/icons'
import Laptop from '../images/laptop.svg'


const Intro = () => {

    return(
        <Row className='body-width'>
            <div className='long-line' />
                <Col lg={12} md={24} sm={24} xs={24}>
                    <div className='text-box intro-text-box'>

                        <Typed className={'hello-text'}strings={[`Hello, I'm <br /> <span class='name-text name-bracer-left deselect'>{</span><h1 class='name-text deselect'>Mohamed Abdi</h1><span class='name-text name-bracer-right deselect'>}</span><br /><span class='position-text deselect'>Full Stack Developer</span>`]} typeSpeed={60}/>
                        
                        <Col lg={12} sm={8} xs={15}>
                            <div className='resume-btn' onClick={() => window.open('../file/resume.pdf', '_blank')}>
                                <span style={{ color: '#fff' }}><DownloadOutlined style={{fontSize:'1.5em'}}/> Download Résumé</span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={12} md={0} sm={0} xs={0}>
                    <div >
                        <Laptop className='main-image'/>
                    </div>
                </Col>
           
            <style jsx>{`
                h1 {
                margin: 0;
                display: inline-block;
                }
                .intro-text-box {
                    padding-top: 17%;
                    padding-left: %;
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
            <script>
                {}
            </script>
        </Row>
    )
}

export default Intro