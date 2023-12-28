'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function Contact() {

  const router = useRouter();

  const redirectToGithub = () => {
    window.location.href = 'https://github.com/Mrahman141';
  };


  return (
    <>
      <div
        class="flex flex-col items-center bg-Nocturnal-Indigo text-center text-white h-128">
          <h1 className='text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-bold pt-10'>Find Me Here</h1>
        <div class="container mx-auto px-6 pt-6">
          <div class="flex flex-col items-center justify-center sm:flex-row small:space-x-5">

            <a href="https://github.com/Mrahman141" target="_blank"
              class="my-2 group flex justify-center items-center gap-2 origin-left hover:decoration-2 bg-sky-700 relative brightness-100 hover:brightness-75  px-6 py-4 border text-left p-3 text-gray-50 text-base rounded-lg overflow-hidden">
              <svg class="fill-neutral-50" height="44" viewBox="0 0 100 100" width="44" xmlns="http://www.w3.org/2000/svg">
                <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
              </svg>
              <span class="border-l-2 px-1">Mohammed Aminoor Rahman</span>
            </a>

            <a href="https://github.com/Mrahman141" target="_blank"
              class="my-2 group flex justify-center items-center gap-2 origin-left hover:decoration-2 relative bg-neutral-900 brightness-100 hover:brightness-75 px-6 py-4 border text-left p-3 text-gray-50 text-base rounded-lg overflow-hidden">
              <svg class="fill-neutral-50 " height="44" viewBox="0 0 100 100" width="44" xmlns="http://www.w3.org/2000/svg">
                <path class="svg-fill-primary" d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"></path>
              </svg>
              Mohammed Aminoor Rahman
            </a>

            <button
              class="my-2 group flex justify-center items-center gap-2 origin-left hover:decoration-2  relative  px-6 py-4 border text-left p-3 text-white bg-Midnight-Blue brightness-150 hover:brightness-100 text-base rounded-lg overflow-hidden">
              <svg stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" height="44" width="44" xmlns="http://www.w3.org/2000/svg" class="w-8 fill-none">
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M8 9h8"></path>
                <path d="M8 13h6"></path>
                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
              </svg>
              Message Me
            </button>
          </div>
        </div>

      </div>


    </>
  )
}
