import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {
    const words = [
        {
            text: "Hello",
        },
        {
            text: "I'm",
        },
        {
            text: "Aayush",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Singh",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md 
        flex flex-col items-center justify-center
         relative overflow-hidden mx-auto py-10 
         md:py-0"
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className="p-4 relative z-10 w-full text-center ">
                <h1 className="mt-20 flex justify-center text-center md:mt-0 text-4xl md:text-7xl font-bold 
            bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400">
                    <TypewriterEffectSmooth

                        words={words}
                    />
                </h1>
                <p
                    className=" mt-4 font-normal text-base md:text-lg text-neutral-300
                 max-w-lg mx-auto"
                >
                    {" "}
                    As an aspiring Full Stack Developer, proficient in frontend and backend development. Skilled in designing user interfaces, managing databases, and implementing server-side logic. Expertise in multiple programming languages and frameworks. Passionate about innovation and continuous learning to deliver robust solutions for modern businesses.
                </p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        <Button
                            className="bg-white dark:bg-black text-black
                     dark:text-white border-neutral-200 dark:border-slate-800"
                            borderRadius="1.75rem"
                        >
                            Explore
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
