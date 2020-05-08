import React from "react"
import { motion } from "framer-motion"

import WavingHand from "../../images/hand_wave.svg"

const Hero = () => {
    return (
        <section className="bg-gray-100 pb-12">
            <div className="w-4/5 m-auto pt-10 lg:py-20 ">
                <motion.div
                    className="flex justify-center"
                    //Animate to
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                >
                    <div className="">
                        <motion.span
                            className="text-center inline-block"
                            animate={{ rotate: 70 }}
                            transition={{
                                duration: 2,
                                flip: Infinity,
                            }}
                        >
                            <WavingHand className="h-20" />
                        </motion.span>
                        <div clasName="">
                            <div className="leading-tight">
                                <h1 className="text-3xl font-bold lg:text-6xl">
                                    <span className="text-gray-800 font-semibold">
                                        Hello, I'm <br />
                                    </span>
                                    Mohamed Abdi
                                </h1>
                            </div>
                            <div className="text-gray-600 font-md lg:text-xl leading-loose">
                                Full-Stack Developer
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
