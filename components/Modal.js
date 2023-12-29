'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Loading from './Loading';
import ThankYou from './ThankYou';

export default function Modal() {
    const router = useRouter();

    const handleGoBack = (e) => {
        e.preventDefault();
        router.push('/');
    };


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: ''
    });

    // State to store error messages
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        bio: ''
    });

    const [loading, setLoading] = useState(false);

    // State to manage success state
    const [success, setSuccess] = useState(false);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for empty fields and update errors state
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        setErrors(newErrors);

        // If there are errors, return without submitting the form
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {

            setLoading(true);

            console.log('Form data before request:', formData);

            // Make a POST request to your backend server
            await axios.post('/api/sendemail', 
            {
                name: formData.name,
                bio: formData.bio,
                email: formData.email
            }
            , {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              
              
            setLoading(false);

            console.log('Form data submitted:', formData);

            setSuccess(true);

            // Reset form data after successful submission if needed
            setFormData({
                name: '',
                email: '',
                bio: '',
            });

            setTimeout(() => {
                router.push('/');
            }, 2500);

        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Clear error message when the user starts typing
        setErrors({
            ...errors,
            [e.target.name]: ''
        });
    };

    return (
        <>
            <div className="text-white min-h-screen w-full bg-Nocturnal-Indigo flex justify-center items-center">
                <div
                    className={`w-full md:w-2/3 overflow-hidden text-white p-8 rounded-lg ${loading || success ? 'hidden' : ''}`}
                >
                    <div className='flex justify-between'>
                        <h2 className="text-xl md:text-2xl lg:text-3xl justify-start font-bold text-center my-auto w-full">Send me a Message</h2>
                        <button onClick={handleGoBack} className="my-auto cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                            </svg>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-lg md:text-xl lg:text-2xl block font-medium" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                className="mt-1 p-2 w-full border rounded-md bg-Night-Sky"
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg md:text-xl lg:text-2xl font-medium" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="mt-1 p-2 w-full border rounded-md bg-Night-Sky"
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg md:text-xl lg:text-2xl font-medium" htmlFor="bio">
                                Message
                            </label>
                            <textarea
                                className="mt-1 p-2 w-full border rounded-md bg-Night-Sky"
                                rows="6"
                                name="bio"
                                id="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                required
                            />
                            {errors.bio && <p className="text-red-500">{errors.bio}</p>}
                        </div>

                        <div className="flex justify-end">
                            <button
                                className="md:w-2/5 lg:w-1/4 [background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white text-lg md:text-xl lg:text-2xl px-4 py-2 font-semibold rounded-md hover:opacity-80"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>


                {loading && <Loading />}

                {success && <ThankYou />}


            </div>
        </>
    );
};
