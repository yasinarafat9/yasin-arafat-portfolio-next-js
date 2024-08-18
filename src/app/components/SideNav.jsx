import React from 'react';
import { FiMail } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiNewBorn } from "react-icons/gi";
const SideNav = () => {
    return (
        <div className='container w-[25%] bg-gray-500'>
            {/* SideNav */}
            <div className="text-center ">
                <img className='rounded-xl w-full h-[250px] object-cover' src="https://i.pinimg.com/564x/d2/a7/93/d2a7932211aa3dba9a24a24e4215ad78.jpg" />
                <h5 className='tracking-widest mt-2'>Yasin Arafat</h5>
                <h6 className=''>Web Devoloper</h6>
            </div>
            <div>
                <div className='flex items-center gap-5 container2'>
                    <FiMail className='text-3xl'/>
                    <div className=''>
                        <small>Email :</small>
                        <p className=''>yasinarafat9612@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 container2'>
                    <MdOutlineLocalPhone className='text-3xl'/>
                    <div className=''>
                        <small>Phone :</small>
                        <p className=''>+880 1863100961</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 container2'>
                    <GiNewBorn className='text-3xl'/>
                    <div className=''>
                        <small>Birthday :</small>
                        <p className=''>3 May 2002</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideNav;