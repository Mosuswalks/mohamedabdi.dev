import React, { useState } from "react"
import {
    SendOutlined,
    GithubOutlined,
    SlackOutlined,
    LinkedinOutlined,
} from "@ant-design/icons"
import { motion } from "framer-motion"

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

const Contact = () => {
    const [state, setState] = useState({})

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...state,
            }),
        }).catch(error => alert(error))
    }

    return (
        <section className="bg-gray-100 " id="contact">
            <div className="w-4/5 m-auto py-12 md:w-1/2 ">
                <div className="leading-snug ">
                    <div className="pt-16 ml-6 text-3xl font-mono font-semibold text-gray-800 lg:text-5xl">
                        <h3>Get in Touch!</h3>
                    </div>
                    <div className="px-6 ml-2 text-2xl text-gray-700">
                        <motion.button
                            onClick={() =>
                                window.open(
                                    "https://github.com/mosuswalks",
                                    "__blank"
                                )
                            }
                            whileHover={{ color: "#718096" }}
                            transition={{ ease: "easeOut" }}
                            className="text-gray-800"
                        >
                            <GithubOutlined />
                        </motion.button>
                        <motion.button
                            onClick={() =>
                                window.open(
                                    "https://linkedin.com/in/mohamedaabdi",
                                    "__blank"
                                )
                            }
                            whileHover={{ color: "#4299E1" }}
                            transition={{ ease: "easeOut" }}
                            className="text-blue-700 pl-3"
                        >
                            <LinkedinOutlined />
                        </motion.button>
                        <span className="text-pink-600 pl-3">
                            <SlackOutlined />
                        </span>
                    </div>
                </div>
                <div>
                    <form
                        className="py-12 pl-3"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="contact" />

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
                                name="fullname"
                                placeholder="Jane Doe"
                                onChange={handleChange}
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
                                name="email"
                                placeholder="jane@example.com"
                                onChange={handleChange}
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
                                name="message"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="px-6 py-3">
                            <motion.button
                                className="px-3 bg-blue-500 border font-bold text-gray-100 rounded shadow py-2 px-4 mt-4"
                                type="submit"
                                whileHover={{
                                    scale: 1.02,
                                }}
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
