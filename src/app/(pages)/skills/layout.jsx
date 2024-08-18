import Link from 'next/link'

const layout = ({ children }) => {


    return (
        <div className="bg-[#111111] rounded-xl" >
            <div className="flex justify-end w-[600px]">
                <Link className="container3" href="/skills">Web Devolopment</Link>
                <Link className="container3" href="/skills/design-edit-skills">Design Editing </Link>
            </div>
            {children}
        </div>

    )

}
export default layout;