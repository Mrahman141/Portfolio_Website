import React from 'react'
import Carousel from '@/components/Carousel'

const pics = [
    '/StartMenu.png',
    '/BlueWin.png'
]

export default function page() {
    return (
        <>

            <div className='bg-Midnight-Blue min-h-screen w-full flex justify-between pl-8 mb-32'>

                <div className="text-3xl text-white w-1/2 max-h-full px-8">

                    <div className="flex justify-center mb-8">
                        <h1 className="text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-8">
                            Human League
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-8">
                            Project Description
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500">Human League</span>
                        &nbsp;is an immersive football (soccer) game that engages players in a dynamic and visually appealing gaming environment. The game is designed with three main maps — Dugout, Arena/Stadium, and Podium — each serving a unique purpose in the gameplay experience. Players can score goals in the Stadium, experience a strobe light effect indicating their goal, and celebrate victories on the Podium.
                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-8">
                            Project Goal
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        The primary goal of&nbsp;
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-red-500 to-blue-500">Human League</span>
                        &nbsp;is to deliver an entertaining and interactive gaming experience centered around football. Developed as a crucial component for a game development course assignment, the project aims to showcase fundamental game development concepts and techniques, including map design, actor/object implementation, lighting effects, user interface design, and artificial intelligence for controlled characters.
                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-8">
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
                        <li><strong>User Interface:</strong> Designed using Unreal Engine's UI features, including menus for main, pause, and endgame scenarios, providing a seamless and intuitive user experience.</li>
                        <li><strong>Artificial Intelligence:</strong> Implemented through behavior trees and sensing mechanisms, allowing AI-controlled characters (Defender and Goalkeeper) to exhibit dynamic and responsive behaviors during gameplay.</li>
                    </ul>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-8">
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
                        <h1 className="font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 p-8">
                            Code Repositories
                        </h1>
                    </div>
                    <p className="text-center">
                        The code for the project can be found on our Github repository at the following link:
                        <a href="https://github.com/Mrahman141/HumanLeague" target="_blank" className="text-blue-500 underline">https://github.com/Mrahman141/HumanLeague</a>
                    </p>

                </div>


                <div className="flex items-center w-1/2 fixed right-0 h-full px-8">
                    <div className="rounded bg-gradient-to-r from-red-500 to-blue-500 p-1">
                        <Carousel autoSlide={true}>
                            {pics.map((x, index) => (
                                <img key={index} src={x} className="" alt={`slide-${index}`} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

        </>
    )
}
