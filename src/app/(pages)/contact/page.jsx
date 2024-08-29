import React from 'react';
import Link from 'next/link';
import CardSmall from '../../components/CardSmall';
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaWhatsappSquare, FaYoutubeSquare, FaSkype } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const page = () => {
    return (
        <div className="m-auto">
            <h3>My Lcation</h3>
            <div className="grid grid-cols-4 m-auto">
                <CardSmall img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Chatmohar_RCNBSN_High_School_premises.jpg/800px-Chatmohar_RCNBSN_High_School_premises.jpg"
                    title="Chatmohar"
                    subtitle="Pabna"
                />
                <CardSmall img="https://www.touristplaces.com.bd/images/pp/5/p112422.jpg"
                    title="Kuril, Jomuna Future Park"
                    subtitle="Dhaka"
                />
                <CardSmall img="https://www.newagebd.com/files/records/news/202303/196887_111.jpg"
                    title="Mirpur 11"
                    subtitle="Dhaka"
                />

                <CardSmall img="https://bprop-area-guides.s3.amazonaws.com/area-guides/wp-content/uploads/2020/09/Transportation.jpg"
                    title="Badda Link Road"
                    subtitle="Dhaka"
                />
            </div>
            <br />

            <br />
            <div className='container'>
                <form className='w-[600px] m-auto my-10'>
                    <div className='mb-2'>
                        <label className="block mb">Your Email Address :</label>
                        <input />
                    </div>

                    <div className="mb-2">
                        <label className="block">Your Message :</label>
                        <textarea className='h-[200px]'/>
                    </div>
                    <button className='btn-1 w-full'>Submit</button>
                </form>
            </div>

            <h3 className='text-center'>Social Media</h3>

            <div className='grid grid-cols-2 m-auto '>
                <div className="m-auto">
                    <FaLinkedin className="social-icons" />
                    <FaFacebookSquare className="social-icons" />
                    <FaTwitterSquare className="social-icons" />
                    <FaInstagramSquare className="social-icons" />
                </div>
                <div className="m-auto">
                    <Link className='flex gap-2 items-center' href="/"><FaWhatsappSquare className="social-icons" /> +8801863100961</Link>
                    <Link className='flex gap-2 items-center' href="/"> < FiMail className="social-icons" /> yasinarafat9612@gmail.com</Link>
                    <Link className='flex gap-2 items-center' href="/"> <FaYoutubeSquare className="social-icons" /> yasinarafat9612@gmail.com</Link>
                    <Link className='flex gap-2 items-center' href="/">  <FaSkype className="social-icons" /> yasinarafat9612@gmail.com</Link>
                </div>
            </div>
        </div>
    );
};

export default page;