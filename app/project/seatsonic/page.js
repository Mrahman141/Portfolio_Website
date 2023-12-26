'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function page() {



    const router = useRouter();

    const handleGoBack = (e) => {
        e.preventDefault();
        router.push('/');
    };


    return (
        <>
            <div className='bg-Midnight-Blue min-h-screen w-full flex justify-center'>

                <div className="text-white p-8 text-base md:text-lg lg:text-xl xl:text-2xl pb-32">

                    <div className="flex justify-center mb-8">
                        <h1 className="text-4xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-gray-200 p-4 md:p-8 text-center">
                            SeatSonic
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-200 p-4 md:p-8 text-center">
                            Project Description
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-gray-200">SeatSonic</span> is a dynamic concert ticket sales management system crafted to streamline the process of selling and administering concert tickets. Developed as the first project during a comprehensive course, <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-gray-200">SeatSonic</span> showcases a blend of Python and Django technologies. The platform excels in flexibility, allowing efficient management of multiple venues, each with its unique seating arrangements, and facilitates smooth order processing for a seamless ticket purchasing experience.
                    </p>
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-200 p-4 md:p-8 text-center">
                            Project Goal
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        The primary objective of <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-gray-200">SeatSonic</span> is to provide a user-friendly and responsive solution for concert ticket sales. As a course-required project, it serves as an immersive introduction to Python and Django, emphasizing adaptability and responsiveness to user needs. <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-gray-200">SeatSonic</span> aims to demonstrate the practical application of these technologies in creating a robust, real-world system capable of handling complex tasks in the entertainment industry.
                    </p>
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-200 p-4 md:p-8 text-center">
                            Technologies used
                        </h1>
                    </div>
                    <p className="text-center mb-4">At the core of <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-gray-200">SeatSonic's</span> functionality here are the key technologies and concepts which include:</p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>
                            <strong>Django:</strong> A high-level Python web framework for rapid development and pragmatic design.
                        </li>
                        <li>
                            <strong>MongoDB:</strong> A NoSQL database for dynamic and scalable data storage.
                        </li>

                        <li>
                            <strong>Django Templates:</strong> Utilized for rendering dynamic HTML content based on server-side data.
                        </li>
                        <li>
                            <strong>Bootstrap:</strong> Integrated for a responsive and modern user interface design.
                        </li>
                        <li>
                            <strong>JavaScript:</strong> Enhances interactivity and user experience on the client side.
                        </li>
                    </ul>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-200 p-4 md:p-8 text-center">
                            Challenges and Solutions
                        </h1>
                    </div>

                    <ul className="mb-6">
                        <li>
                            <p className='text-center mb-4'><strong>Challenge: Simultaneously learning Python and Django during the project posed a significant challenge.</strong></p>
                            <p className='text-center mb-4'><strong>Solution:</strong> Through an agile product engineering approach, we adopted a hands-on learning strategy. Regular practice and continuous iteration allowed us to grasp key concepts, ensuring a successful implementation of SeatSonic. Additionally, leveraging the Django framework's clean design principles facilitated a smoother learning curve.</p>
                        </li>

                        <li>
                            <p className='text-center mb-4'><strong>Challenge: Managing dynamic updates for venues, concerts, pricing, and user accounts.</strong></p>
                            <p className='text-center mb-4'><strong>Solution:</strong> We implemented a robust back-end structure using Django and MongoDB, enabling seamless updates.</p>
                        </li>

                        <li>
                            <p className='text-center mb-4'><strong>Challenge: Multilingual and multi-currency support for future scalability.</strong></p>
                            <p className='text-center mb-4'><strong>Solution:</strong> While the initial implementation focuses on English communication and Canadian dollars, the system is designed to easily adapt to other languages and currencies. The use of Django Rosetta for translations and a flexible data model allows for straightforward adjustments to meet future global requirements.</p>
                        </li>
                    </ul>


                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-200 p-4 md:p-8 text-center">
                            Code Repositories
                        </h1>
                    </div>
                    <p className="text-center">
                        The code for the project can be found on my Github repository&nbsp;
                        <a href="https://github.com/Mrahman141/SeatSonic" target="_blank" className="text-blue-500 underline">Here</a>
                    </p>
                    <br /><br />
                    <button onClick={handleGoBack} className="text-center text-base md:text-2xl lg:text-2xl xl:text-2xl hover:from-blue-700 hover:to-gray-300 bg-gradient-to-r from-blue-500 to-gray-200 to-gray-200 rounded text-white font-semibold w-full p-3 mt-2">
                        Go Back Home
                    </button>

                    

                </div>
            </div>

        </>
    )
}
