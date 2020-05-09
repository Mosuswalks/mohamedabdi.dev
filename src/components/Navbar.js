import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
    MenuOutlined,
    CloseOutlined,
    CodeOutlined,
    UserOutlined,
    MessageOutlined,
} from "@ant-design/icons"
import Avatar from "../images/avatar.svg"
import { motion } from "framer-motion"

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const data = useStaticQuery(graphql`
        {
            allImageSharp(
                filter: { fluid: { originalName: { eq: "avatar.webp" } } }
            ) {
                edges {
                    node {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
        }
    `)

    return (
        <header
            className={`${
                isMenuOpen ? "lg:shadow lg:border" : "shadow"
            } relative`}
        >
            <div className="flex items-center justify-between px-4 pb-2 lg:px-12">
                <div>
                    <Avatar className="h-16 spa" />
                </div>
                <div>
                    <motion.button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-600 text-2xl hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                    >
                        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </motion.button>
                </div>
            </div>

            <motion.div
                className={`${
                    isMenuOpen ? "show" : null
                } absolute w-full z-10 bg-white px-4 pt-3 pb-4 border-b shadow-lg lg:w-1/3 lg:bg-white lg:border lg:right-0 lg:rounded-lg lg:mx-8 lg:my-3`}
                initial={{ scale: 0 }}
                animate={isMenuOpen ? { scale: 1 } : { scale: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 1 }}
                >
                    <a href="#projects" className="text-2xl">
                        <span className="flex items-center px-2 rounded hover:bg-gray-300 mb-3">
                            <div className="h-12 w-12 text-center border shadow bg-white text-blue-600 rounded-full m-2">
                                <CodeOutlined />
                            </div>
                            <span className="px-3 text-gray-800 font-semibold">
                                Projects
                                <span className="block text-xs text-gray-600 -mt-2">
                                    What i've worked on
                                </span>
                            </span>
                        </span>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 1 }}
                >
                    <a href="#about" className="font-semibold text-2xl">
                        <span className="flex items-center px-2 rounded hover:bg-gray-300 mb-3">
                            <div className="h-12 w-12 text-center border shadow bg-white text-blue-600 rounded-full m-2">
                                <UserOutlined />
                            </div>
                            <span className="px-3 text-gray-900">
                                About
                                <br />
                                <span className="block text-xs text-gray-600 -mt-2">
                                    Get to know me better
                                </span>
                            </span>
                        </span>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 1 }}
                >
                    <a href="#contact" className="pt-12 font-semibold text-2xl">
                        <span className="flex items-center px-2 rounded hover:bg-gray-300">
                            <div className="h-12 w-12 text-center border shadow bg-white text-blue-600 rounded-full m-2">
                                <MessageOutlined />
                            </div>
                            <span className="px-3 text-gray-900">
                                Contact
                                <span className="block text-xs text-gray-600 -mt-2">
                                    Ready to work together?
                                </span>
                            </span>
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Navbar
