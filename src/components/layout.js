
import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children, color, darkMode, textColor }) => {

const layoutStyle = {
	backgroundColor: color,
		margin: 'auto',
		marginTop: 0,
		marginBottom: 0,
}
	return (
		<div style={layoutStyle}>
			<Header color={color} darkMode={darkMode} textColor={textColor}/>

			{children}


			<Footer color={color} textColor={textColor} />

			<style jsx global>{`
					body {
						font-family: 'Quicksand', sans-serif;
						margin: 0;
						overflow-x: hidden;
					}
					a {
						font-family: 'Quicksand', sans-serif;
					}
					.container {
						z-index: 10;
						margin: 0 auto;
						width: 100%;
						padding: 0 20px;
					}
					.content {
						display: flex;
						justiy-content: center;
					}
					
					@media (min-width: 85.375em) and (max-width: 119em) {
						.container {
							width: 980px;
						}
					}
					@media (min-width: 120em) {
						.container {
							width: 1180px;
						}
					}
					@media (min-width: 160em) {
						.container {
							width: 1380px;
						}
					}
				`}
				</style>
		</div>
	)
}

export default Layout
