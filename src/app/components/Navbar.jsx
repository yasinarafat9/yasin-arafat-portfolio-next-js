import React from 'react';
import "../styles/Navbar.css"
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='container bg-gray-500 w-[100%] m-auto'>
            <div>

            </div>
            <ul className='flex gap-12  w-full'>
                <Link href="/skills" ><li>Skills</li></Link>
                <Link href="/about" ><li>About</li></Link>
                <Link href="/resume" ><li>Resume</li></Link>
                <Link href="/contact" ><li>Contact</li></Link>
                <Link href="/blog" ><li>Blog</li></Link>
                <Link href="/education" ><li>Education</li></Link>
                <Link href="/projects" ><li>Projects</li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;