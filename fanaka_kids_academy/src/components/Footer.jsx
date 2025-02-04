import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineCall } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Footer = ({ image }) => {
  return (
    <div className="bg-red-800 py-20">
      {/* Main components */}
      <div className="flex flex-row justify-between px-10">
        {/* Logo & Heading in one row */}
        <div className="flex flex-1 flex-col items-start gap-6">
          <div className="flex flex-row items-center gap-4">
            <img src={image} alt="logo footer" className="w-1/6" />
            <h3 className="text-white font-bold text-3xl">
              <span className="text-5xl">F</span>anaka Kids
              <br />
              Talent Academy
            </h3>
          </div>

          {/* Paragraph below */}
          <p className="text-white">
            Be part of a vibrant community of young learners.
            <br />
            Fanaka Kids provides a supportive and stimulating environment for
            <br />
            children to thrive.
            <br />
            Discover the joy of learning through ballet, chess, and public speaking.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 flex-col items-center gap-6 text-white">
          <span className="block w-28 h-1 bg-white"></span>
          <a href="/about">ABOUT US</a>
          <a href="/blog">BLOG</a>
          <a href="/events">Events & Dates</a>
          <a href="/game">Game</a>
          <a href="/home">Home</a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-1 flex-col items-center gap-6 text-white">
          
          <span className="block w-28 h-1 bg-white"></span>
          <h4 className='text-start'>CONTACT US</h4>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-2">
              <TfiEmail />
              <span>info@fanakakids.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineCall />
              <span>+123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
