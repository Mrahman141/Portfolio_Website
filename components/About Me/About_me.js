import React from 'react'

export default function About_me() {
    return (
        <>
            <div className="bg-Deep-Midnight-Blue min-h-screen w-full text-white">
                <h1 className=' text-2xl md:text-3xl lg:text-4xl text-center font-bold pt-10'> About Me (Make Grid for lg and md screen) (test with other fonts) (Change padding of list to look sleeek) </h1>
                <p className="text-xl md:text-2xl lg:text-3xl pr-10 pl-8 pt-10">Hello Again! I'm Mohammed Aminoor Rahman, a Bangladeshi national born and raised in the vibrant and diverse setting of Qatar. Currently, I'm pursuing an Honours Bachelor of Technology in Software Development at Seneca Polytechnic in Ontario, Canada. My journey in the world of technology is fueled by a passion for innovation and a commitment to honing my skills in software development. </p>
                <p className="text-xl md:text-2xl lg:text-3xl pr-10 pl-8 pt-10">Curious to know more about the skills I work with? Explore my comprehensive list of software-related skills Below:</p>


                <div className="overflow-x-auto whitespace-nowrap mx-8 text-lg md:text-xl lg:text-2xl mt-10">
                    <div class="inline-block w-100 h-80 bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto">
                        <ul class="list-none">
                            <li className="underline font-semibold">Web Development</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                            <li>Item 7 (scroll at item 8)</li>
                        </ul>
                    </div>
                    
                    <div class="inline-block w-100 h-80  bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto ">
                        <ul class="list-none">
                            <li className="underline font-semibold">Data Structures</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                            <li>Item 7 (scroll at item 8)</li>
                        </ul>
                    </div>
                    <div class="inline-block w-100 h-80  bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto ">
                        <ul class="list-none">
                            <li className="underline font-semibold">Database</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                            <li>Item 7 (scroll at item 8)</li>
                        </ul>
                    </div>
                    <div class="inline-block w-100 h-80 bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto ">
                        <ul class="list-none">
                            <li className="underline font-semibold">Programming Language/Concepts</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                            
                        </ul>
                    </div>
                    <div class="inline-block w-100 h-80  bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto">
                        <ul class="list-none">
                            <li className="underline font-semibold">IDEs and version Control</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                            <li>Item 7 (scroll at item 8)</li>
                        </ul>
                    </div>

                    {/* <div class="inline-block w-100 h-80  bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto">
                        <ul class="list-none">
                            <li className="underline font-semibold">Other Development Tools</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </div>

                    <div class="inline-block w-100 h-80  bg-Night-Sky text-center p-4 md:p-6 mr-10 rounded-md shadow-md overflow-auto">
                        <ul class="list-none">
                            <li className="underline font-semibold">Personal Skills</li>
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </div> */}
                    
                </div>
                

            </div>
        </>
    )
}
