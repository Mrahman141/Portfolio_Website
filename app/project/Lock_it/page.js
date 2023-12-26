'use client'
import React from 'react'
import Carousel from '@/components/Carousel'
import { useRouter } from 'next/navigation'



const pics = [
    '/home.png',
    '/form.png',
    '/vault2.png',
    '/plans.png',
    '/image-3.png',
]

export default function page() {



    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };


    return (
        <>

            <div className='bg-Midnight-Blue min-h-screen w-full justify-between hidden laptop:flex'>

                <div className="text-white w-1/2 p-4 text-base md:text-lg lg:text-xl xl:text-2xl pb-32">

                    <div className="flex justify-center mb-8">
                        <h1 className="text-4xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Lock-it
                        </h1>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Project Description
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span>
                        &nbsp;is an innovative and secure data storage system developed during the Bell Geekfest Hackathon. It stands as a testament to the team's prowess in crafting a comprehensive solution that prioritizes user privacy and data security. Leveraging advanced technologies and a strategic blend of services, <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> provides users with a robust platform for safeguarding their digital assets.                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Project Goal
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        The primary goal of <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span>, conceived and executed within the time constraints of the Bell Geekfest Hackathon, is to empower users with a secure and private data storage solution. By integrating cutting-edge encryption practices and technologies, <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> ensures that users have complete control over their information, fostering a sense of confidence and trust in the security of their data.                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Technologies used
                        </h1>
                    </div>
                    <p className='text-center mb-4'><span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> harnesses a combination of technologies to meet its security objectives, a feat achieved within the dynamic environment of a hackathon:</p>

                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>AWS S3:</strong> Securely stores BLOBS, including images, files, and videos.</li>
                        <li><strong>MongoDB:</strong> Manages file metadata efficiently.</li>
                        <li><strong>AWS KMS:</strong> Generates unique keys for users, pivotal for data encryption.</li>
                        <li><strong>AWS Cognito:</strong> Facilitates secure authentication with Bearer tokens for authorized access.</li>
                        <li><strong>AWS Lambda:</strong> Triggers key creation in AWS KMS upon user signup, automating key management.</li>
                        <li><strong>Helmet:</strong> Enhances Express.js app security with additional headers.</li>
                        <li><strong>Stripe:</strong> Safely handles transactions and financial operations.</li>
                        <li><strong>Node.js and Express.js:</strong> Form the backend, ensuring secure data encryption, storage, and retrieval.</li>
                        <li><strong>SSL Encryption:</strong> Adds an extra layer of security for data in transit.</li>
                        <li><strong>Next.js, Tailwind CSS, and Fuse.js:</strong> Power the frontend, delivering a responsive and user-friendly interface.</li>
                    </ul>


                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Challenges and Solutions
                        </h1>
                    </div>

                    <p className='text-center mb-4'><strong>Challenge: Limited Timeframe</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> was developed within the dynamic environment of a hackathon, showcasing the team's ability to efficiently address challenges and deliver a secure and functional solution within tight time constraints.</p>

                    <p className='text-center mb-4'><strong>Challenge: Security Assurance</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> The integration of AWS KMS, SSL encryption, and Helmet headers addresses security concerns, ensuring Lock-It provides an airtight defense against unauthorized access and potential vulnerabilities.</p>

                    <p className='text-center mb-4'><strong>Challenge: Rapid Key Management</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> AWS Lambda automates the creation of unique keys in AWS KMS for each user, simplifying key management and bolstering the overall security infrastructure.</p>

                    <p className='text-center mb-4'><strong>Challenge: User-Friendly Experience</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> The frontend, built with Next.js, Tailwind CSS, and Fuse.js, ensures a seamless and responsive user interface, allowing users to effortlessly interact with and control their data.</p>


                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Code Repositories
                        </h1>
                    </div>
                    <p className="text-center">
                        The code (NO LINK HERE) for the project can be found on my Github repository&nbsp;
                        <a href="https://www.youtube.com/watch?v=CdZN8PI3MqM&list=RDCdZN8PI3MqM&start_radio=1" target="_blank" className="text-blue-500 underline">Here</a>
                    </p>
                    <br /><br />
                    <button onClick={handleGoBack} className="text-center text-base md:text-2xl lg:text-2xl xl:text-2xl hover:from-[#0e5c6f] hover:via-[#5497ab] hover:to-gray-300 bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 rounded text-white font-semibold w-full p-3 mt-2">
                        Go Back Home
                    </button>

                </div>

                <div className="flex items-center w-1/2 fixed right-0 h-full px-8">
                    <div className="rounded bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-white p-1">
                    <Carousel autoSlide={true} images={pics} />

                    </div>
                </div>
            </div>


            <div className='bg-Midnight-Blue min-h-screen w-full flex justify-center laptop:hidden'>

                <div className="text-white p-8 text-base md:text-lg lg:text-xl xl:text-2xl pb-32">

                    <div className="flex justify-center mb-8">
                        <h1 className="text-4xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Lock-it
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <div className="rounded bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-white p-1">
                        <Carousel autoSlide={true} images={pics} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Project Description
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span>
                        &nbsp;is an innovative and secure data storage system developed during the Bell Geekfest Hackathon. It stands as a testament to the team's prowess in crafting a comprehensive solution that prioritizes user privacy and data security. Leveraging advanced technologies and a strategic blend of services, <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> provides users with a robust platform for safeguarding their digital assets.                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Project Goal
                        </h1>
                    </div>
                    <p className="text-center mb-6">
                        The primary goal of <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span>, conceived and executed within the time constraints of the Bell Geekfest Hackathon, is to empower users with a secure and private data storage solution. By integrating cutting-edge encryption practices and technologies, <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> ensures that users have complete control over their information, fostering a sense of confidence and trust in the security of their data.                    </p>

                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Technologies used
                        </h1>
                    </div>
                    <p className='text-center mb-4'><span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> harnesses a combination of technologies to meet its security objectives, a feat achieved within the dynamic environment of a hackathon:</p>

                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li><strong>AWS S3:</strong> Securely stores BLOBS, including images, files, and videos.</li>
                        <li><strong>MongoDB:</strong> Manages file metadata efficiently.</li>
                        <li><strong>AWS KMS:</strong> Generates unique keys for users, pivotal for data encryption.</li>
                        <li><strong>AWS Cognito:</strong> Facilitates secure authentication with Bearer tokens for authorized access.</li>
                        <li><strong>AWS Lambda:</strong> Triggers key creation in AWS KMS upon user signup, automating key management.</li>
                        <li><strong>Helmet:</strong> Enhances Express.js app security with additional headers.</li>
                        <li><strong>Stripe:</strong> Safely handles transactions and financial operations.</li>
                        <li><strong>Node.js and Express.js:</strong> Form the backend, ensuring secure data encryption, storage, and retrieval.</li>
                        <li><strong>SSL Encryption:</strong> Adds an extra layer of security for data in transit.</li>
                        <li><strong>Next.js, Tailwind CSS, and Fuse.js:</strong> Power the frontend, delivering a responsive and user-friendly interface.</li>
                    </ul>


                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Challenges and Solutions
                        </h1>
                    </div>

                    <p className='text-center mb-4'><strong>Challenge: Limited Timeframe</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> <span className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200">Lock-It</span> was developed within the dynamic environment of a hackathon, showcasing the team's ability to efficiently address challenges and deliver a secure and functional solution within tight time constraints.</p>

                    <p className='text-center mb-4'><strong>Challenge: Security Assurance</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> The integration of AWS KMS, SSL encryption, and Helmet headers addresses security concerns, ensuring Lock-It provides an airtight defense against unauthorized access and potential vulnerabilities.</p>

                    <p className='text-center mb-4'><strong>Challenge: Rapid Key Management</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> AWS Lambda automates the creation of unique keys in AWS KMS for each user, simplifying key management and bolstering the overall security infrastructure.</p>

                    <p className='text-center mb-4'><strong>Challenge: User-Friendly Experience</strong></p>
                    <p className='text-center mb-4'><strong>Solution:</strong> The frontend, built with Next.js, Tailwind CSS, and Fuse.js, ensures a seamless and responsive user interface, allowing users to effortlessly interact with and control their data.</p>


                    <div className="flex justify-center">
                        <h1 className="font-semibold text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 p-4 md:p-8 text-center">
                            Code Repositories
                        </h1>
                    </div>
                    <p className="text-center">
                        The code (NO LINK HERE) for the project can be found on my Github repository&nbsp;
                        <a href="https://www.youtube.com/watch?v=CdZN8PI3MqM&list=RDCdZN8PI3MqM&start_radio=1" target="_blank" className="text-blue-500 underline">Here</a>
                    </p>
                    <br /><br />
                    <button onClick={handleGoBack} className="text-center text-base md:text-2xl lg:text-2xl xl:text-2xl hover:from-[#0e5c6f] hover:via-[#5497ab] hover:to-gray-300 bg-gradient-to-r from-[#15859e] via-[#72c1d3] to-gray-200 rounded text-white font-semibold w-full p-3 mt-2">
                        Go Back Home
                    </button>

                </div>
            </div>

        </>
    )
}
