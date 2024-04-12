"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent =[
    {
      "title": "JavaScript Game Development",
      "description": "Dive into the world of game development with JavaScript. From simple browser-based games to more complex projects using libraries like Phaser.js or Three.js, explore the endless possibilities of creating interactive gaming experiences."
    },
    {
      "title": "TypeScript Project Exploration",
      "description": "Embark on a journey of discovery with TypeScript. Build projects ranging from small utilities to full-fledged applications, leveraging TypeScript's strong typing system to enhance code quality, scalability, and maintainability."
    },
    {
      "title": "React Component Library Creation",
      "description": "Delve into the world of component-driven development with React. Create a reusable component library that encapsulates UI elements, patterns, and interactions, empowering developers to build consistent and cohesive user interfaces across projects."
    },
    {
      "title": "Node.js API Development",
      "description": "Unleash the power of Node.js by building robust APIs. Learn to design and implement RESTful or GraphQL APIs using frameworks like Express.js or NestJS, and integrate with databases, authentication systems, and external services to create scalable backend solutions."
    },
    {
      "title": "Next.js Server-Side Rendering Exploration",
      "description": "Explore the benefits of server-side rendering with Next.js. Develop dynamic web applications that render pages on the server, improving performance, SEO, and user experience. Dive into features like data fetching, routing, and static site generation to build modern web experiences."
    }
  ]
  
function WhyChooseUs() {
    return (
        <div>
            <StickyScroll content={musicSchoolContent}/>

           
        </div>
    )
}

export default WhyChooseUs