'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'



const testimonials = [
    {
      "quote": "Working with stive was a delight. Their coding skills are top-notch, and they consistently delivered high-quality solutions on time.",
      "name": "John Doe",
      "title": "Senior Software Engineer"
    },
    {
      "quote": "stive has a remarkable ability to tackle complex coding challenges with ease. Their attention to detail and problem-solving skills are exceptional.",
      "name": "Alice Smith",
      "title": "Frontend Developer"
    },
    {
      "quote": "I had the pleasure of collaborating with stive on a project, and I was impressed by their dedication and commitment to writing clean, efficient code.",
      "name": "David Brown",
      "title": "Backend Developer"
    },
    {
      "quote": "As a team lead, I highly recommend stive. Their contributions were invaluable, and their code reviews were thorough and insightful.",
      "name": "Sarah Johnson",
      "title": "Tech Lead"
    },
    {
      "quote": "stive is a talented coder with a passion for innovation. Their creative solutions have greatly enhanced our product development process.",
      "name": "Michael Lee",
      "title": "Full Stack Developer"
    },
    {
      "quote": "It is rare to find a coder as versatile and dedicated as stive. They consistently go above and beyond to meet project requirements and exceed expectations.",
      "name": "Emily Wilson",
      "title": "Software Engineer"
    },
    {
      "quote": "I have had the pleasure of mentoring stive during their coding journey, and I am continually impressed by their rapid growth and eagerness to learn.",
      "name": "Alex Rodriguez",
      "title": "Senior Developer"
    },
    {
      "quote": "stive is a quick learner with a strong grasp of programming concepts. Their enthusiasm for coding is infectious, making them a valuable asset to any team.",
      "name": "Jessica Taylor",
      "title": "Junior Developer"
    },
    {
      "quote": "It is refreshing to work with someone as passionate and dedicated as stive. Their positive attitude and problem-solving skills make them a pleasure to collaborate with.",
      "name": "Daniel Evans",
      "title": "Software Architect"
    },
    {
      "quote": "I have had the pleasure of witnessing stive growth as a coder, and I have no doubt that they will continue to excel and make significant contributions to the field.",
      "name": "Sophia Martinez",
      "title": "Software Developer"
    }
  ]

function TestimonialCards() {
    return (
        <div className='  h-[30rem] w-full dark:bg-black
        dark:bg-grid-white/[0.2] relative flex flex-col items-center
        justify-center overflow-hidden'>
            <h2 className='text-3xl font-bold text-center mb-8 z-10'>
                Read Quote&apos;s: Voices of success</h2>
            <div className='flex justify-center w-full overflow-hidded px-4 lg:px-8'>
                <div className='w-full max-w-6xl'>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="fast" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards;