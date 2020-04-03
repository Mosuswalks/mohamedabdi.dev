import React from 'react'
import { Col, Row } from 'antd'
import Typed from 'react-typed'
import { DownloadOutlined } from '@ant-design/icons'
import Laptop from '../images/laptop.svg'


const Intro = () => {

    let option = {
        strings: ['Hello!']
    }

    return(
        <Row className='body-width'>
            <div className='long-line' />
                <Col lg={12} md={24} sm={24} xs={24}>
                    <div className='text-box'>

                        {/* <Typed strings={["<span class='hello-text deselect'>Hello, I'm </span>"]} typeSpeed={70}/> */}
                        
                        <Typed className={'hello-text'}strings={[`Hello, I'm <br /> <span class='name-text name-bracer-left deselect'>{</span><h1 class='name-text deselect'>Mohamed Abdi</h1><span class='name-text name-bracer-right deselect'>}</span><br /><span class='position-text deselect'>Full Stack Developer</span>`]} typeSpeed={60}/>
                        {/* <div className=''>
                            <Typed strings={[`^1300 <span class='name-text deselect name-bracer-left'>{</span><h1 class='name-text deselect'>Mohamed Abdi</h1> <span class='name-text name-bracer-right'>} </span>`]} typeSpeed={70}/>
                        </div> */}

                        {/* <Typed strings={[`^2300 <span class='position-text deselect typed'>Full Stack Developer</span>`]} typeSpeed={70} /> */}
                        {/* <div className='me-text deselect'>
                            I design and code for
                            <br />
                            <span className='flex-row'>
                                Website
                            </span>
                            <br />
                            <span className='flex-row'>
                                Mobile
                            </span>
                        </div> */}
                   
                        <Col lg={10} sm={8} xs={15}>
                            <div className='resume-btn' onClick={() => window.open('/file/resume.pdf', '_blank')}>
                                <span style={{ color: '#fff' }}>Grab My Resume</span>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col lg={12} md={12} sm={0} xs={0}>
                    <div >
                        {/* <Image className='main-image' imgName={'laptop.png'}/> */}
                        <Laptop className='main-image'/>
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
            <script>
                {}
            </script>
        </Row>
    )
}

export default Intro