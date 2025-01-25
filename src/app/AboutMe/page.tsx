import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
          {/* BackgroundBeams with adjusted z-index */}
          <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
          {/* Content with higher z-index */}
          <div className="max-w-full mx-auto p-4 relative z-10 text-white">
            <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8">
              About Me
            </h1>
            
            <div className="text-neutral-500 max-w-full mx-auto my-6 text-base text-justify leading-relaxed">
              <p>
                Hi there! I’m Aayush, a passionate software developer with a drive for building innovative solutions that make a tangible impact. My journey in technology has been an exciting adventure filled with continuous learning, challenges, and achievements. Throughout the years, I’ve developed a strong foundation in full-stack web development, working on projects that encompass both client-side and server-side technologies.
              </p>
    
              <p className="my-4">
                Having graduated with a strong technical focus, I quickly realized my deep interest in creating robust and scalable applications. From the early days of writing basic code to now developing complex systems, I’ve built a variety of projects across different domains. These include e-commerce platforms, real-time communication apps, and software solutions for property management, all following clean architecture and industry standards.
              </p>
    
              <p className="my-4">
                My technical expertise spans a wide range of technologies, including <strong>React.js</strong> for front-end development, <strong>Node.js</strong> for back-end, and <strong>Socket.IO</strong> for real-time web communication. I’ve also worked extensively with <strong>.NET Core MVC</strong> for creating highly scalable and secure web applications. I enjoy working with APIs, integrating services, and ensuring that every piece of the system works together seamlessly.
              </p>
    
              <p className="my-4">
                One of the projects I’m most proud of is a full-fledged real estate platform where users can list, search, and manage property listings with advanced filtering and search capabilities. The platform includes features like JWT authentication, real-time messaging, and a dynamic dashboard for managing user profiles and listings. This project challenged me to optimize both front-end and back-end systems to ensure smooth user experiences while managing large datasets.
              </p>
    
              <p className="my-4">
                I’ve also delved deep into real-time applications, creating chat applications using <strong>Socket.IO</strong>. These projects allowed me to explore the challenges of real-time, bidirectional communication, such as managing multiple users across different devices and ensuring message consistency and privacy. My ability to debug and solve intricate issues in such applications has significantly improved through these experiences.
              </p>
    
              <h2 className="text-2xl font-bold mt-6 ">My Vision & Approach</h2>
              <p className="my-4">
                I believe that software development is not just about writing code—it’s about creating solutions that solve real-world problems efficiently. My approach to development focuses on scalability, maintainability, and user-centered design. I strive to ensure that every application I build not only works seamlessly but also delivers value to users and can evolve with changing business needs.
              </p>
    
              <p className="my-4">
                I constantly keep myself updated with the latest industry trends and technologies, because in the fast-paced world of tech, staying static is never an option. I actively seek out opportunities to learn and grow, whether that’s by exploring new tools, contributing to open-source projects, or attending industry meetups.
              </p>
    
              <h2 className="text-2xl font-bold mt-6">Skills & Expertise</h2>
              <ul className="list-disc list-inside my-4 space-y-2">
                <li>
                  <strong>Full-stack Development:</strong> Expertise in React, Node.js, Express.js, and .NET Core MVC for building comprehensive web applications.
                </li>
                <li>
                  <strong>Real-time Communication:</strong> Experience with Socket.IO, enabling real-time, bidirectional communication in chat apps, live updates, and collaborative platforms.
                </li>
                <li>
                  <strong>API Integration:</strong> Proficient in designing and integrating RESTful APIs, ensuring smooth communication between client and server.
                </li>
                <li>
                  <strong>Responsive Design:</strong> Building responsive, mobile-first web applications that provide a seamless experience across devices.
                </li>
                <li>
                  <strong>Clean Architecture:</strong> Applying clean architecture principles to ensure scalability and maintainability in my projects.
                </li>
              </ul>
    
              <h2 className="text-2xl font-bold mt-6">My Projects</h2>
              <p className="my-4">
                Over the years, I’ve worked on various projects that have not only strengthened my technical skills but also broadened my perspective on solving real-world problems. Some of my key projects include:
              </p>
              <ul className="list-disc list-inside my-4 space-y-2">
                <li>
                  <strong>Real Estate Platform:</strong> A full-stack web application where users can list and search properties, with features like advanced filtering, real-time messaging, and user authentication.
                </li>
                <li>
                  <strong>Real-time Chat App:</strong> Built with React and Socket.IO, enabling users to communicate in real time across multiple devices with features like group chats, private messaging, and user presence.
                </li>
                <li>
                  <strong>E-commerce Platform:</strong> A dynamic product listing and shopping cart system with category filtering, product sorting, and a checkout process integrated with local storage.
                </li>
                <li>
                  <strong>Bestsellers App:</strong> A MERN stack application that allows users to perform CRUD operations, contact landlords, and manage detailed property information with user authentication.
                </li>
              </ul>
    
              <h2 className="text-2xl font-bold mt-6">Get in Touch</h2>
              <p className="my-4">
                I’m always open to discussing new ideas, collaborating on exciting projects, or helping out with technical challenges. Whether it’s to chat about the latest in web development or to work on an innovative project, feel free to reach out to me.
              </p>
    
              <div className="text-center">
                <a
                  href="mailto:youremail@example.com"
                  className="inline-block mt-4 px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default page;
