'use client'
import React from 'react'
import Carousel from '@/components/Carousel'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const pics = [
    '/StartMenu.png',
    '/LockerRoom.png',
    '/hallway.png',
    '/Arena.png',
    '/BlueScoreLights.png',
    '/BlueWin.png',
    '/RedScoreLights.png',
    '/RedWin.png',
]


export default function Page() {

    const router = useRouter();

    const handleGoBack = (e) => {
        e.preventDefault();
        router.push('/');
    };


    return (
        <>

            <div className='bg-Midnight-Blue min-h-screen w-full justify-between hidden laptop:flex '>

                <div className="text-white w-1/2 p-4 text-base md:text-lg lg:text-xl xl:text-2xl pb-32">

                    <div className="flex justify-center mb-8">
                        <h1 className="text-4xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Human League
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Project Description
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500">Human League</span>
                        &nbsp;is an immersive football (soccer) game that engages players in a dynamic and visually appealing gaming environment. The game is designed with three main maps — Dugout, Arena/Stadium, and Podium — each serving a unique purpose in the gameplay experience. Players can score goals in the Stadium, experience a strobe light effect indicating their goal, and celebrate victories on the Podium.
                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Project Goal
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        The primary goal of&nbsp;
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500">Human League</span>
                        &nbsp;is to deliver an entertaining and interactive gaming experience centered around football. Developed as a crucial component for a game development course assignment, the project aims to showcase fundamental game development concepts and techniques, including map design, actor/object implementation, lighting effects, user interface design, and artificial intelligence for controlled characters.
                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Technologies used
                        </h1>
                    </div>
                    <p className="text-center mb-4">
                        The project leverages Unreal Engine, a powerful game development engine, to bring the vision to life. Key technologies and concepts include:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Unreal Engine:</strong> The foundation for game development, providing tools for designing maps, implementing actors and objects, creating animations, and managing user interfaces.</li>
                        <li><strong>Blueprints:</strong> Utilized for defining game logic, creating actors, and implementing various functionalities without the need for extensive coding.</li>
                        <li><strong>Animation:</strong> Mixamo is employed for collecting and downloading animations and character skins, enhancing the realism and movements of characters in the game.</li>
                        <li><strong>User Interface:</strong> Designed using Unreal Engine&apos;s UI features, including menus for main, pause, and endgame scenarios, providing a seamless and intuitive user experience.</li>
                        <li><strong>Artificial Intelligence:</strong> Implemented through behavior trees and sensing mechanisms, allowing AI-controlled characters (Defender and Goalkeeper) to exhibit dynamic and responsive behaviors during gameplay.</li>
                    </ul>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Challenges and Solutions
                        </h1>
                    </div>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Lighting Management:</strong> The abundance of lights in the game presented a challenge, leading to potential flashbang effects during testing. The team addressed this by strategically managing the placement and functionality of lights, ensuring a visually pleasing experience without overwhelming the player.</li>

                        <li><strong>Obstacle Predictability:</strong> Initially, all moving obstacles had synchronized movements, making it predictable for players. To enhance gameplay, the team introduced randomness to obstacle movements, adding an element of surprise and challenge for players.</li>

                        <li><strong>Save and Load Functionality:</strong> Implementing a robust save and load system required careful consideration. The team overcame this by creating separate Blueprint classes for game state and save game data, implementing functions to handle saving, loading, and deleting game progress.</li>

                        <li><strong>AI Movement Coordination:</strong> Coordinating the movements of AI-controlled characters, particularly the Goalkeeper, posed a challenge. By placing invisible cones strategically, the team ensured that the Goalkeeper remained close to the goal post, enhancing its defensive capabilities.</li>
                    </ul>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Code Repositories
                        </h1>
                    </div>
                    <p className="text-center">
                        The code for the project can be found on my Github repository&nbsp;
                        <a href="https://github.com/Mrahman141/HumanLeague" target="_blank" className="text-blue-500 underline">Here</a>
                    </p>

                </div>

                <div className="flex flex-col justify-center w-1/2 fixed right-0 h-full px-8">
                    <div className="rounded bg-gradient-to-r from-red-500 to-blue-500 p-1 mt-auto">
                        <Carousel autoSlide={true} images={pics} />
                    </div>
                    <div className="mt-auto mb-32">
                        <button onClick={handleGoBack} className="text-center text-base md:text-2xl lg:text-2xl xl:text-2xl hover:bg-gradient-to-r hover:from-red-700 hover:to-blue-700 bg-gradient-to-r from-red-500 to-blue-500 rounded text-white font-semibold w-full p-3 mt-2">
                            Go Back Home
                        </button>
                    </div>
                </div>

            </div>

            <div className='bg-Midnight-Blue min-h-screen w-full flex justify-center laptop:hidden'>

                <div className="text-white p-8 text-base md:text-lg lg:text-xl xl:text-2xl pb-32">

                    <button onClick={handleGoBack} className="text-center text-base md:text-2xl lg:text-2xl xl:text-2xl hover:bg-gradient-to-r hover:from-red-700 hover:to-blue-700 bg-gradient-to-r from-red-500 to-blue-500 rounded text-white font-semibold w-full p-3 mt-2">
                        Go Back Home
                    </button>

                    <div className="flex justify-center my-8">
                        <h1 className="text-4xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Human League
                        </h1>
                    </div>

                    <div className="flex items-center">
                        <div className="rounded bg-gradient-to-r from-red-500 to-blue-500 p-1">
                            <Carousel autoSlide={true} images={pics} />

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Project Description
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500">Human League</span>
                        &nbsp;is an immersive football (soccer) game that engages players in a dynamic and visually appealing gaming environment. The game is designed with three main maps — Dugout, Arena/Stadium, and Podium — each serving a unique purpose in the gameplay experience. Players can score goals in the Stadium, experience a strobe light effect indicating their goal, and celebrate victories on the Podium.
                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Project Goal
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        The primary goal of&nbsp;
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500">Human League</span>
                        &nbsp;is to deliver an entertaining and interactive gaming experience centered around football. Developed as a crucial component for a game development course assignment, the project aims to showcase fundamental game development concepts and techniques, including map design, actor/object implementation, lighting effects, user interface design, and artificial intelligence for controlled characters.
                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Technologies used
                        </h1>
                    </div>
                    <p className="text-center mb-4">
                        The project leverages Unreal Engine, a powerful game development engine, to bring the vision to life. Key technologies and concepts include:
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Unreal Engine:</strong> The foundation for game development, providing tools for designing maps, implementing actors and objects, creating animations, and managing user interfaces.</li>
                        <li><strong>Blueprints:</strong> Utilized for defining game logic, creating actors, and implementing various functionalities without the need for extensive coding.</li>
                        <li><strong>Animation:</strong> Mixamo is employed for collecting and downloading animations and character skins, enhancing the realism and movements of characters in the game.</li>
                        <li><strong>User Interface:</strong> Designed using Unreal Engine&apos;s UI features, including menus for main, pause, and endgame scenarios, providing a seamless and intuitive user experience.</li>
                        <li><strong>Artificial Intelligence:</strong> Implemented through behavior trees and sensing mechanisms, allowing AI-controlled characters (Defender and Goalkeeper) to exhibit dynamic and responsive behaviors during gameplay.</li>
                    </ul>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Challenges and Solutions
                        </h1>
                    </div>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>Lighting Management:</strong> The abundance of lights in the game presented a challenge, leading to potential flashbang effects during testing. The team addressed this by strategically managing the placement and functionality of lights, ensuring a visually pleasing experience without overwhelming the player.</li>

                        <li><strong>Obstacle Predictability:</strong> Initially, all moving obstacles had synchronized movements, making it predictable for players. To enhance gameplay, the team introduced randomness to obstacle movements, adding an element of surprise and challenge for players.</li>

                        <li><strong>Save and Load Functionality:</strong> Implementing a robust save and load system required careful consideration. The team overcame this by creating separate Blueprint classes for game state and save game data, implementing functions to handle saving, loading, and deleting game progress.</li>

                        <li><strong>AI Movement Coordination:</strong> Coordinating the movements of AI-controlled characters, particularly the Goalkeeper, posed a challenge. By placing invisible cones strategically, the team ensured that the Goalkeeper remained close to the goal post, enhancing its defensive capabilities.</li>
                    </ul>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-4 md:p-8 text-center">
                            Code Repositories
                        </h1>
                    </div>
                    <p className="text-center">
                        The code for the project can be found on my Github repository&nbsp;
                        <a href="https://github.com/Mrahman141/HumanLeague" target="_blank" className="text-blue-500 underline">Here</a>
                    </p>
                    <br /><br />
                    <button onClick={handleGoBack} className="text-center text-base md:text-2xl lg:text-2xl xl:text-2xl hover:bg-gradient-to-r hover:from-red-700 hover:to-blue-700 bg-gradient-to-r from-red-500 to-blue-500 rounded text-white font-semibold w-full p-3 mt-2">
                        Go Back Home
                    </button>
                </div>


            </div>

        </>
    )
}
