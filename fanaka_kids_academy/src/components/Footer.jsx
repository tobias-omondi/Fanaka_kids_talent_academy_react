import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Footer = ({ image }) => {
  return (
    <>
    <div className='bg-orange-600 py-5 md:py-10 justify-center'>
        <p className='text-center text-white text-1xl mx-9 md:mx-0 md:text-2xl'>GET INVOLVED WITH FANAKA KIDS TALENT ACADEMY.</p>
      </div>
    <div className="bg-red-800 py-12">
      {/* Main components */}
      <div className="flex flex-col flex-1 justify-between px-10 md:flex-row">
        {/* Logo & Heading in one row */}
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex flex-row items-center gap-3 md:gap-8">
            <img src={image} alt="logo footer" className="w-1/3 md:w-1/5" />
            <h3 className="text-white font-extrabold text-3xl">
              <span className="text-5xl text-orange-500 ">F</span>anaka Kids
              <br /> Talent
              <span className="text-3xl text-orange-500 "> Academy</span>
            </h3>
          </div>

          {/* Paragraph below */}
          <p className="text-white max-w-full">
            Be part of a vibrant community of young learners.
            <br />
            Fanaka Kids provides a supportive and stimulating environment for
            children to thrive.Discover the joy of learning through ballet, chess, and public speaking.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 flex-col items-start md:items-center gap-6 text-white mt-10 md:mt-0 cursor-pointer">
          <span className="block w-28 h-1 bg-white"></span>
          <a href="/about">ABOUT US</a>
          <a href="/blog">BLOG & EVENTS</a>
          <a href="/images">IMAGES</a>
          <a href="/videos">VIDEOS</a>
          <a href="/">HOME</a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-1 flex-col items-start md:items-center gap-6 text-white mt-10 md:mt-0">
          
          <span className="block w-28 h-1 bg-white"></span>
          <h4 className='text-start'>CONTACT US</h4>
          <div className="flex flex-col items-start gap-4">
             <div className="flex items-start gap-2">
              <TfiEmail size={20}/>
              <a href="mailto:fanakakidsinfo@gmail.com" className="text-white hover:underline">
                 info@fanakakids.com
              </a>
            </div>
            <div className="flex items-center  gap-2">
              <MdOutlineCall size={20}/>
              <span>+254 725 477 131 <span className='text-orange-500'> || </span>+254 732 218 621</span>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn size={20} />
              <span>Nairobi, Kenya</span>
            </div>

            {/* what's app icon and tiktok with icons */}
            <div className='flex flex-row gap-5'>
              <a href='https://www.tiktok.com/@fanaka024?_t=ZM-8uB5EJHCibF&_r=1'>
                <FaTiktok size={20} className='text-black hover:text-gray-800'/>
              </a>
              <a href=''>
                <FaWhatsapp size={20} className='text-green-400 hover:text-green-600'/>
              </a>
            </div>
          </div>
        </div>
      </div>
       {/* Copyright Notice */}
      <div className="mt-10 text-center text-white pt-3">
         <div className="w-2/3 mx-auto border-t border-white"></div> 
           <p className="mt-2">© {new Date().getFullYear()} Fanaka Kids Talent Academy. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
