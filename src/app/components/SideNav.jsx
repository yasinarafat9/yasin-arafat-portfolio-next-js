"use client"
import {usePathname} from 'next/navigation';
import React from 'react';
import { FiMail } from "react-icons/fi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiNewBorn } from "react-icons/gi";
   
import ImgMe from '@/assets/Me.jpg'
import Image from 'next/image';
import Link from 'next/link';
const SideNav = () => {
    const pathName = usePathname();
    return (
        <div className=' container w-[25%] bg-gray-500'>
            {/* SideNav */}
            <Link href="/" >
                <div className="text-center container2 ">
                    <Image className='rounded-xl w-full h-[250px] object-cover'
                        src={ImgMe} />
                    <h5 className={pathName === "/"? "active tracking-widest mt-2" : "tracking-widest mt-2"} >Yasin Arafat</h5>
                    <h6 className={pathName === "/"? "active" : ""}>Web Devoloper</h6>
                </div>
            </Link>

            <div>
                <div className='flex items-center gap-5 container2'>
                    <FiMail className='text-3xl' />
                    <div className=''>
                        <small>Email :</small>
                        <p className=''>yasinarafat9612@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 container2'>
                    <MdOutlineLocalPhone className='text-3xl' />
                    <div className=''>
                        <small>Phone :</small>
                        <p className=''>+880 1863100961</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 container2'>
                    <GiNewBorn className='text-3xl' />
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