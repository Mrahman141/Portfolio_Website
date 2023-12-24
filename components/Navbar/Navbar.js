"use client"
import React, { useEffect, useState } from 'react';


export default function Navbar() {

    const [isNavOpen, setisNavOpen] = useState(false);

    const [scrollData, setScrollData] = useState({
        y: 0,
        lastY: 0
    });
    const [visible, setVisible] = useState(true);



    useEffect(() => {
        
        const handleScroll = () => {
            setScrollData(prevState => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y
                }
            })
        }
        
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [])


    useEffect(() => {
        // console.log(scrollData)

        if(scrollData.y > 0 ) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        if(scrollData.y < scrollData.lastY) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        if(scrollData.y <= 0 &  scrollData.lastY <= 0) {
            setVisible(true);
        }

        // if (scrollData.lastY === scrollData.y) { // this fixes the trembling
        //     return;
        // }

    }, [scrollData])

    


    // MAYBE CHANGE THE OPACITY DEPENDING ON OTHER CONTENTS HERE VVVVVVV bg-opacity-20 ALSO FIGURE OUT THE TRANSITION FOR MOBILE DROPDOWN
    return (
        <nav id="navbar" className={` bg-Midnight-Blue  fixed w-full top-0 z-10 text-white ${visible ? ' translate-y-0 transition-all duration-500 ease-in-out' : ' -translate-y-full transition-all duration-500 ease-in-out'}`}>
            <div className="max-w-full  py-2.5 text-xl 24inch:text-2xl 27inch:text-2xl sm:text-xl">
                <div className="flex justify-between">
                    <div className="ml-8">
                        <a href="#Aminoor" className="font-semibold">Aminoor</a>
                    </div>


                    <div className="sm:hidden">
                        <button
                            onClick={() => setisNavOpen(!isNavOpen)}
                            className="focus:outline-none mr-8"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:flex space-x-5 justify-end mr-8">
                        <a href="#Home" className="">Home</a>
                        <a href="#AboutMe" className="">About Me</a>
                        <a href="#Skills" className="">Skills</a>
                        <a href="#Projects" className="">Projects</a>
                        <a href="#Contact" className="">Contact</a>
                    </div>
                </div>

                {isNavOpen && (
                    <div className={`sm:hidden pl-8 border-t-2 transform`}>
                        <a href="#Home" className="block py-2">Home</a>
                        <a href="#AboutMe" className="block py-2">About Me</a>
                        <a href="#Skills" className="block py-2">Skills</a>
                        <a href="#Projects" className="block py-2">Projects</a>
                        <a href="#Contact" className="block py-2">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    )
}
