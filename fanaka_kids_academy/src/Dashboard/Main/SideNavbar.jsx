import React from 'react'
import { MdAdminPanelSettings, MdEventBusy, MdOutlineMessage } from 'react-icons/md'
import { BsGraphDown } from "react-icons/bs";
import { IoMdImages } from 'react-icons/io';
import { VideoIcon } from 'lucide-react';
import { FaBlog } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';

const SideNavbar = () => {
  return (
    <div className='absolute top-0 w-2/12 z-30'>
      <div className='bg-white shadow-md h-screen'>
        <ul className='py-16 m-5 flex flex-col gap-8'>
            <li>
                <a href='/fanaka-dashboard-admin' className='flex flex-row gap-5'><MdAdminPanelSettings/>    ADMIN</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-overview' className='flex flex-row gap-5'><BsGraphDown /> OVERVIEW</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-images' className='flex flex-row gap-5'><IoMdImages />   IMAGES</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-videos' className='flex flex-row gap-5'><VideoIcon />    VIDEOS</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-blogs' className='flex flex-row gap-5'><FaBlog/>   BLOGS</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-events&dates' className='flex flex-row gap-5'><MdEventBusy />   EVENTS & DATES</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-messages'className='flex flex-row gap-5'><MdOutlineMessage/>   MESSAGES</a>
            </li>
            <li>
                <a href='/fanaka-dashboard-settings' className='flex flex-row gap-5'><CiSettings/>SETTINGS</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNavbar
