import React from 'react'
import Link from 'next/link'

export default function Projects() {
    return (
        <>
            <div className="bg-Shadowy-Indigo min-h-screen w-full text-white pb-20">
                <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-bold pt-10'>Projects</h1>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl pr-10 pl-8 pt-10">Dive into a glimpse of my journey through hands-on projects that demonstrate my passion for software development. Each project is a testament to my skills, creativity, and problem-solving mindset. Explore the exciting world of code and innovation below, where every project tells a unique story of challenges conquered and solutions crafted.</p>
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl pr-10 pl-8 pt-10">Take a closer look at my project portfolio here, and let the code speak for itself!</p>

                <div className='space-y-10 mt-10 flex flex-col items-center px-8'>

                    <div id='Human_League' className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 h-auto md:h-72 flex relative rounded bg-gradient-to-r from-red-500 to-blue-500 p-1">
                    <div className="rounded overflow-hidden bg-Night-Sky text-white p-4">
                            <div className="z-10 flex flex-col justify-evenly w-full h-full">
                                <span className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">Human League</span>
                                <p className="text-base md:text-2xl lg:text-2xl xl:text-2xl">
                                    Human League, my debut game developed using Unreal Engine 5, showcases my initiation into game design. Executed in collaboration with a skilled group, this project highlights our collective ability to harness advanced technology for an immersive gaming experience.
                                </p>
                                <Link href="/project/human_league" className="text-center text-base md:text-xl lg:text-xl xl:text-xl hover:bg-gradient-to-r hover:from-red-700 hover:to-blue-700 bg-gradient-to-r from-red-500 to-blue-500 rounded text-white font-semibold w-full p-3 mt-2">
                                    Learn More
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div id='Lock_it' className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 h-auto md:h-72 flex relative rounded bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-white p-1">
                        <div className="rounded overflow-hidden bg-Night-Sky text-white p-4">
                            <div className="z-10 flex flex-col justify-evenly w-full h-full">
                                <span className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">Lock-it</span>
                                <p className="text-base md:text-2xl lg:text-2xl xl:text-2xl">
                                    Lock-It is a state-of-the-art data storage solution prioritizing user privacy with top-tier encryption. Developed collaboratively, it serves as a testament to our collective expertise and commitment to delivering advanced security solutions.
                                </p>
                                <Link href="/project/Lock_it" className="text-center text-base md:text-xl lg:text-xl xl:text-xl hover:from-[#0e5c6f] hover:via-[#5497ab] hover:to-gray-300 bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 rounded text-white font-semibold w-full p-3 mt-2">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id='SeatSonic' className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 h-auto md:h-72 flex relative rounded bg-gradient-to-r from-blue-500 to-white p-1">
                        <div className="rounded overflow-hidden bg-Night-Sky text-white p-4">
                            <div className="z-10 flex flex-col justify-evenly w-full h-full">
                                <span className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">SeatSonic</span>
                                <p className="text-base md:text-2xl lg:text-2xl xl:text-2xl">
                                    SeatSonic streamlines concert ticket sales for companies with its advanced management system, supporting multiple venues and emphasizing adaptability through agile product engineering. As my inaugural project, its success is a testament to collaborative efforts within a skilled group.
                                </p>
                                <Link href="/project/seatsonic" className="text-center text-base md:text-xl lg:text-xl xl:text-xl hover:from-blue-700 hover:to-gray-300 bg-gradient-to-r from-blue-500 to-gray-200 rounded text-white font-semibold w-full p-3 mt-2">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}
