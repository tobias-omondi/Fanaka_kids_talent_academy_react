import React from 'react'
import { AiFillTikTok, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../assets/fanakakidslogo.jpeg'

const Navbar = () => {
  return (
    <>
    {/* main container */}
    <div className='bg-white'>
            <ul className='bg-red-800 w-48 text-3xl flex justify-evenly p-1 ml-auto'>
                <li>
                    <a href='#' className='text-black hover:text-blue-700'><AiFillTikTok /></a>
                </li>
                <li>
                    <a href='#'  className='text-green-600 hover:text-green-300'><AiOutlineWhatsApp /></a>
                </li>
            </ul>
    </div>
    {/* main navbar container */}



    <div className='bg-orange-600 p-8 flex items-center justify-between'>
        {/* logo for the website */}
        <img src={logo} alt='logo' className='w-20 rounded-xl' /> 
        {/* links for the web pages */}
        <div className=' text-white flex-1 text-center space-x-9'>
            <Link to="/" >Home</Link>
            <Link to="/about" >About Us</Link>
            <Link to="/blog" >Blog</Link>
            <Link to="/media" >Media</Link>
            <Link to="/games" >Game</Link>
        </div>
        <div className=' text-white'>
            <Link to="/contact" >Contact us</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
