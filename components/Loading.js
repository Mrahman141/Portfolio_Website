import React from 'react'

export default function Loading() {
    return (
        <>
            <div class="text-white text-2xl md:text-3xl lg:text-4xl px-8 py-4 text-center me-4 inline-flex items-center space-x-5">
                <div class="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
                <div>
                    Sending Message Please Wait . . .
                </div>
            </div>

        </>
    )
}
