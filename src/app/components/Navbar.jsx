"use client"
import React from 'react';
import "../styles/Navbar.css"
import Link from 'next/link'
import {usePathname} from 'next/navigation';
const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className='container bg-gray-500 w-[100%] m-auto'>
            <div>

            </div>
            <ul className='flex gap-12  w-full'>
                <Link href="/skills" className={pathName === "/skills"? "active" : ""}><li>Skills</li></Link>
                <Link href="/resume" className={pathName === "/resume"? "active" : ""}><li>Resume</li></Link>
                <Link href="/contact" className={pathName === "/contact"? "active" : ""}><li>Contact</li></Link>
                <Link href="/education" className={pathName === "/education"? "active" : ""}><li>Education</li></Link>
                <Link href="/projects" className={pathName === "/projects"? "active" : ""}><li>Projects</li></Link>
                <Link href="/blog" className={pathName === "/blog"? "active" : ""}><li>Blog</li></Link>
                <Link href="/about" className={pathName === "/about"? "active" : ""}><li>About</li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;