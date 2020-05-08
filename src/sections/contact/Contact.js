import React from "react"
import {
    SendOutlined,
    GithubOutlined,
    SlackOutlined,
    LinkedinOutlined,
} from "@ant-design/icons"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <section className="bg-gray-100">
            <div className="w-4/5 m-auto md:w-1/2 ">
                <div className="leading-snug">
                    <div className="pt-6 ml-6 text-4xl font-semibold text-gray-800 lg:text-5xl">
                        <h3>Get in Touch!</h3>
                    </div>
                    <div className="px-6 ml-2 text-2xl text-gray-700">
                        <span className="text-gray-800">
                            <GithubOutlined />
                        </span>
                        <span className="text-blue-700 pl-3">
                            <LinkedinOutlined />
                        </span>
                        <span className="text-pink-600 pl-3">
                            <SlackOutlined />
                        </span>
                    </div>
                </div>
                <div>
                    <form className="pt-8 pb-12 lg:m-3">
                        <div className="flex flex-wrap px-6 ">
                            <div className="">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                    for="grid-full-name"
                                >
                                    Full Name
                                </label>
                            </div>
                            <motion.input
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 1.01 }}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-full-name"
                                type="text"
                                placeholder="Jane Doe"
                            />
                        </div>

                        <div class="flex flex-wrap px-6 pt-6">
                            <div className="">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                    for="grid-full-name"
                                >
                                    Email
                                </label>
                            </div>
                            <motion.input
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 1.01 }}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-email"
                                type="email"
                                placeholder="jane@example.com"
                            />
                        </div>

                        <div class="flex flex-wrap px-6 pt-6">
                            <div className="">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                    for="grid-message"
                                >
                                    Message
                                </label>
                            </div>
                            <motion.textarea
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 1.01 }}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="inline-message"
                                type="textarea"
                                placeholder=""
                            />
                        </div>
                        <div className="px-6 py-3">
                            <motion.button
                                className="px-3 bg-blue-500 border font-bold text-gray-100 rounded shadow py-2 px-4 mt-4"
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 1.01 }}
                            >
                                <span className="flex items-center ">
                                    <SendOutlined className="pr-1" />
                                    Send
                                </span>
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
