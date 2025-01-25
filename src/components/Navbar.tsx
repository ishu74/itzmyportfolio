'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const pathname = usePathname(); 
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            {/* <MenuItem
            setActive={setActive} active={active} item="About Me"
            >
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">Skills</HoveredLink>
            <HoveredLink href="/projects">
              Projects
            </HoveredLink>
           
            
               </div>
            </MenuItem> */}
            <Link href={"/AboutMe"}>
            <MenuItem setActive={setActive} active={active} item="About">
            
            </MenuItem>
            </Link>
            <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Skills">
            
            </MenuItem>
            </Link>
            <Link href={"/projects"}>
            <MenuItem setActive={setActive} active={active} item="Projects">
            
            </MenuItem>
            </Link>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Me">
            
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar