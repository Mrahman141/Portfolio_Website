import Image from 'next/image'
import Home from '@/components/Home/Home'
import About_me from '@/components/About Me/About_me'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Navbar from '@/components/Navbar/Navbar'

// ADD TRANSITIONS TO MAKE IT FEEL SMOOTH AND NICE


export default function Main_Home() {
  return (
    <>
      {/* <Navbar/>
      <Home />
      <div className='bg-gradient-to-b from-Midnight-Blue to-Deep-Midnight-Blue h-24'></div>
      <About_me/>
      <div className='bg-gradient-to-b from-Deep-Midnight-Blue to-Shadowy-Indigo h-24'></div> */}
      <Projects/>
      <div className='bg-gradient-to-b from-Shadowy-Indigo to-Nocturnal-Indigo h-24'></div>
      <Contact/>
    </>
  )
}
