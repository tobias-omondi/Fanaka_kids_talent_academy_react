import React from 'react'
import { MdAdminPanelSettings, MdEventBusy, MdOutlineMessage } from 'react-icons/md'
import { BsGraphDown } from "react-icons/bs";
import { IoMdImages } from 'react-icons/io';
import { VideoIcon } from 'lucide-react';
import { FaBlog } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';

const SideNavbar = () => {
  return (
    <div className='absolute top-0 w-2/12'>
      <div className='bg-black shadow-md h-screen'>
        <ul className='py-16 m-5 flex flex-col gap-8'>
            <li>
                <a href='/fanaka-dashboard-admin' className='flex flex-row gap-5 text-orange-500 hover:text-orange-300 font-light'><MdAdminPanelSettings/>    ADMIN</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-overview' className='flex flex-row gap-5 text-red-500  hover:text-orange-300 font-light'><BsGraphDown /> OVERVIEW</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-images' className='flex flex-row gap-5 text-blue-500 hover:text-blue-300'><IoMdImages />   IMAGES</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-videos' className='flex flex-row gap-5 text-green-500 hover:text-green-300'><VideoIcon />    VIDEOS</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-blogs' className='flex flex-row gap-5 text-purple-500 hover:text-purple-300'><FaBlog/>   BLOGS</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-events&dates' className='flex flex-row gap-5 text-pink-500 hover:text-pink-300'><MdEventBusy />   EVENTS & DATES</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-messages' className='flex flex-row gap-5 text-yellow-500 hover:text-yellow-300'><MdOutlineMessage/>   MESSAGES</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-settings' className='flex flex-row gap-5 text-blue-800 hover:text-blue-300'><CiSettings/>SETTINGS</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNavbar
