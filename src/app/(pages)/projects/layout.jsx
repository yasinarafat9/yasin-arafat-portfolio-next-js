import Link from "next/link";
const layout = ({ children }) => {
    return (
        <div>
            <nav className="flex gap-5 ">
                <Link href="" className=""> <h6>All</h6></Link>
                <Link href="" className=""> <h6>Web Devlopment</h6></Link>
                <Link href="" className=""> <h6>Web Design</h6></Link>
                <Link href="" className=""> <h6>Graphich Design</h6></Link>
                <Link href="" className=""> <h6>Video Editing</h6></Link>
                <Link href="" className=""> <h6>3D Modeling</h6></Link>
            </nav>
            <hr className="opacity-10 my-2"/>
            {children}
        </div>
    )
}

export default layout;