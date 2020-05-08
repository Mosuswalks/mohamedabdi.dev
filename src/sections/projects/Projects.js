import React from "react"
import { motion } from "framer-motion"
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons"
import Snkrs from "../../images/snkrs.svg"
import Virus from "../../images/virus.svg"
import Js from "../../images/logos/javascript.svg"

import { projects } from "../../constants"

const Projects = () => {
    return (
        <section className="bg-gray-200 pb-12" id="projects">
            <div className="w-4/5 m-auto pt-12">
                <div>
                    <h2 className="text-2xl">Projects</h2>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {Object.values(projects).map(project => (
                        <div className="bg-white rounded-lg shadow overflow-hidden border">
                            <div className="">
                                {project.img === "virus" ? (
                                    <Virus />
                                ) : project.img === "snkrs" ? (
                                    <Snkrs />
                                ) : project.img === "JS30" ? (
                                    <Js />
                                ) : null}
                            </div>
                            <div className="m-8">
                                <div>
                                    <h4 className="font-semibold text-xl">
                                        {project.name}
                                    </h4>
                                </div>
                                <div className="font-semibold text-gray-600 uppercase text-xs tracking-widest">
                                    {project.tech_stack.map((tech, i) => (
                                        <span>
                                            {project.tech_stack[i + 1] ? (
                                                <span key={i}>
                                                    {" "}
                                                    {tech} &bull;
                                                </span>
                                            ) : (
                                                <span key={i}> {tech}</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                                <div className="my-4 leading-snug">
                                    <p>{project.description}</p>
                                </div>
                                <div className="flex my-3 text-lg text-gray-700 ">
                                    <div className="hover:text-blue-600">
                                        <motion.button
                                            onClick={() =>
                                                window.open(
                                                    project.github,
                                                    "__blank"
                                                )
                                            }
                                            whileHover={{ scale: 1.3 }}
                                        >
                                            <GithubOutlined type="button" />
                                        </motion.button>
                                    </div>
                                    <div className="ml-4 hover:text-blue-600">
                                        {project.siteLink ? (
                                            <motion.button
                                                onClick={() =>
                                                    window.open(
                                                        project.siteLink,
                                                        "__blank"
                                                    )
                                                }
                                                whileHover={{ scale: 1.3 }}
                                                whileClick={{ scale: 0.9 }}
                                            >
                                                <DesktopOutlined />
                                            </motion.button>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
