import React from "react"

const About = () => {
    return (
        <section id="about" className="bg-gray-200">
            <div className="w-4/5 m-auto">
                <div className="flex items-center py-12">
                    <div className="my-24 lg:w-2/3 lg:m-auto">
                        <h2 className="text-3xl font-mono font-semibold mb-4">
                            About me
                        </h2>

                        <p className="mx-4">
                            Mohamed Abdi loves programming, karting, traveling,
                            and lifting heavy things. He does not love talking
                            about himself in the 3rd person. He's quietly
                            confident, naturally curious, and perpetually
                            working on improving my skills one problem at a
                            time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
