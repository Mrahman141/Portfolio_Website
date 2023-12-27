import React from 'react'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className="bg-Midnight-Blue min-h-screen w-full flex justify-center items-center p-8">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-full ">
                    <div className="md:flex justify-center items-center">
                        <div className="md:shrink-0 mt-10 md:mt-0 lg:mt-0">
                            <img className="object-cover rounded-full md:h-128 md:w-128 lg:h-128 lg:w-128" src='/Me.png' alt="Mohammed Aminoor Rahman" />
                        </div>
                        
                        <div className="p-8 text-white text-2xl md:text-3xl lg:text-4xl">
                            <p className="mt-2">Hi there! I&apos;m Mohammed Aminoor Rahman, a Software Developer studying at Seneca Polytechnic.</p>
                            <p className="mt-2">Welcome to my website!</p>
                            <p className="mt-2">Explore more by scrolling down for insights about me.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}