import React from "react"
import { motion } from "framer-motion"

import WavingHand from "../../images/hand_wave.svg"
import Avatar from "../../images/avatar.svg"

const Hero = () => {
    return (
        <section className="bg-gray-100 py-32 min-h-screen">
            <div className="w-4/5 m-auto  lg:py-20 ">
                <motion.div
                    className="flex justify-center"
                    //Animate to
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                >
                    <div className="text-center">
                        <motion.span
                            className="text-center inline-block"
                            animate={{ rotate: 70 }}
                            transition={{
                                duration: 2,
                                flip: Infinity,
                            }}
                        >
                            <WavingHand className="h-32" />
                        </motion.span>

                        <div clasName="mt-4">
                            <div className="leading-tight">
                                <h1 className="text-3xl text-gray-900 font-mono font-bold lg:text-6xl">
                                    Hello, I'm <br />
                                    Mohamed Abdi
                                </h1>
                            </div>
                            <div className="mt-4 font-light text-gray-700 text-lg lg:text-xl">
                                I design and code beautifully simple things, and
                                I love what I do.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
