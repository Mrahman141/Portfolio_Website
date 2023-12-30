"use client"
import React, { useEffect, useState } from 'react';



export default function Navbar() {

    const [isNavOpen, setisNavOpen] = useState(false);

    const [scrollData, setScrollData] = useState({
        y: 0,
        lastY: 0
    });
    const [visible, setVisible] = useState(true);

    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        setisNavOpen(false);
    };
    


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

        if (scrollData.y > 0) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        if (scrollData.y < scrollData.lastY) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        if (scrollData.y <= 0 & scrollData.lastY <= 0) {
            setVisible(true);
        }



    }, [scrollData])




    return (
        <nav id="navbar" className={` bg-Midnight-Blue  fixed w-full top-0 z-10 text-white ${visible ? ' translate-y-0 transition-all duration-500 ease-in-out' : ' -translate-y-full transition-all duration-500 ease-in-out'}`}>
            <div className="max-w-full  py-2.5 text-xl 24inch:text-2xl 27inch:text-2xl sm:text-xl">
                <div className="flex justify-between">
                    <div className="ml-8">
                        <button onClick={() => scrollToSection('Home')} className="font-semibold">Aminoor</button>
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
                        <button onClick={() => scrollToSection('Home')} className="">Home</button>
                        <button onClick={() => scrollToSection('AboutMe')} className="">About Me</button>
                        <button onClick={() => scrollToSection('AboutMe')} className="">Skills</button>
                        <button onClick={() => scrollToSection('Projects')} className="">Projects</button>
                        <button onClick={() => scrollToSection('Contact')} className="">Contact</button>
                    </div>
                </div>

                {isNavOpen && (
                    <div className={`sm:hidden pl-8 border-t-2 transform`}>
                        <button onClick={() => scrollToSection('Home')} className="block py-2">Home</button>
                        <button onClick={() => scrollToSection('AboutMe')} className="block py-2">About Me</button>
                        <button onClick={() => scrollToSection('AboutMe')} className="block py-2">Skills</button>
                        <button onClick={() => scrollToSection('Projects')} className="block py-2">Projects</button>
                        <button onClick={() => scrollToSection('Contact')} className="block py-2">Contact</button>
                    </div>
                )}
            </div>
        </nav>
    )
}
