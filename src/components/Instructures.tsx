'use client'
import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from './ui/animated-tooltip';


const Instructors = [

    {
        id: 1,
        name: "Harry",
        designation: "Youtuber",
        image: "/instructors/harry.jpg"
       },
      {
        id: 2,
        name: "Hitesh Chaudhari",
        designation: "Youtuber",
        image: "/instructors/hitesh.jpg"
       },
      {
        id: 3,
        name: "Dave Gray",
        designation: "Youtuber",
        image: "/instructors/dave.jpg"
       },
      {
        id: 4,
        name: "Piyush Garg",
        designation: "Youtuber",
        image: "/instructors/piyush.jpg"
      },
      {
        id: 5,
        name: "Imthiyas Gani",
        designation: "Senior employee (AutomateBuddy)",
        image: "/instructors/imthiyas.png"
      }
      
    ]
function Instructures() {
  return (
    <div className='relative h-[40rem] overflow-hidden fles items-center justify-center'>
        {/* <p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white 
        sm:text-4xl"
                    >
                        LEARN WITH THE BEST
                    </p> */}
        <WavyBackground
        className='w-full max-w-7xl mx-auto flex flex-col items-center justify-centerh-full' >
             
            <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet My Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your coding journey</p>
        
        <div className=' flex flex-row items-center justify-center mb-10 w-full'>
        <AnimatedTooltip items ={Instructors} />

            </div>
            </WavyBackground>
    </div>
  )
}

export default Instructures