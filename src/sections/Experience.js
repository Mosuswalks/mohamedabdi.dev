import React from 'react'
import { Row, Col, Divider } from 'antd'
import { theme } from '../../config'

const Experience = () => {


    return(
        <section className='main-container' id='experience'> 
            <div className=''>
            <Divider orientation='left' className='intro-text' 
                     style={{ fontSize: '2rem'}}>
                        <span style={{ color: theme.color.secondary }}>01.</span> About Me
                </Divider>
				<Row className='row-width'>
					<Col lg={{ span: 12, offset: 6 }} md={24} xs={24}>
						<div className='intro-text work-container'>
						<span style={{ color: theme.color.secondary}}>02.</span> Work Experience
						<div className='work-tabs'>
							<span style={{ color: '#f4f4f4'}}>Internship</span> @ Witty Data
						</div>
						<div style={{ fontWeight: 'normal', fontSize: '18px' }}>
							July 2019 - Dec 2019
						</div>
						{/* <ul className='witty-list'>
							{renderMap(witty)}
						</ul> */}
						</div>
					</Col>
				</Row>
                </div>
      		</section>
    )
}

export default Experience