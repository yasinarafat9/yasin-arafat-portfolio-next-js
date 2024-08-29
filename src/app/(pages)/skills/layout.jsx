"use client"
import {usePathname} from 'next/navigation';
import Link from 'next/link'
const layout = ({ children }) => {
    const pathName = usePathname();
    return (
        <div className="" >
            <nav className="flex gap-5 ">
                <Link href="/skills" className={pathName === "/skills"? "active" : ""}> <h6>Web Devolopment</h6></Link>
                <Link href="/skills/design-edit-skills" className={pathName === "/skills/design-edit-skills"? "active" : ""}> <h6>Design Editing </h6></Link>
            </nav>
            <hr className="opacity-10 my-2"/>
            {children}
        </div>

    )

}
export default layout;