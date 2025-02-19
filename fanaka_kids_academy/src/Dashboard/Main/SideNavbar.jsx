import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdAdminPanelSettings, MdEventBusy, MdOutlineMessage } from 'react-icons/md';
import { BsGraphDown } from "react-icons/bs";
import { IoMdImages } from 'react-icons/io';
import { VideoIcon } from 'lucide-react';
import { FaBlog } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import DashboardNavbar from './DashboardNavbar';

const SideNavbar = () => {
  return (
    <>
    <DashboardNavbar />
    <div className='absolute top-0 w-2/12'>
      <div className='bg-black shadow-md h-screen'>
        <ul className='py-16 m-5 flex flex-col gap-8'>

          <li>
            <NavLink 
              to='/fanaka-dashboard/admin-panel' 
              className={({ isActive }) => `flex flex-row gap-5 font-light ${isActive ? 'text-orange-300' : 'text-orange-500 hover:text-orange-300'}`}
            >
              <MdAdminPanelSettings/> ADMIN
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/overview' 
              className={({ isActive }) => `flex flex-row gap-5 font-light ${isActive ? 'text-red-300' : 'text-red-500 hover:text-red-300'}`}
            >
              <BsGraphDown /> OVERVIEW
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/images' 
              className={({ isActive }) => `flex flex-row gap-5 ${isActive ? 'text-blue-300' : 'text-blue-500 hover:text-blue-300'}`}
            >
              <IoMdImages /> IMAGES
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/videos' 
              className={({ isActive }) => `flex flex-row gap-5 ${isActive ? 'text-green-300' : 'text-green-500 hover:text-green-300'}`}
            >
              <VideoIcon /> VIDEOS
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/blogs' 
              className={({ isActive }) => `flex flex-row gap-5 ${isActive ? 'text-purple-300' : 'text-purple-500 hover:text-purple-300'}`}
            >
              <FaBlog/> BLOGS
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/events&dates' 
              className={({ isActive }) => `flex flex-row gap-5 ${isActive ? 'text-pink-300' : 'text-pink-500 hover:text-pink-300'}`}
            >
              <MdEventBusy /> EVENTS & DATES
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/messages' 
              className={({ isActive }) => `flex flex-row gap-5 ${isActive ? 'text-yellow-300' : 'text-yellow-500 hover:text-yellow-300'}`}
            >
              <MdOutlineMessage/> MESSAGES
            </NavLink>
          </li>

          <li>
            <NavLink 
              to='/fanaka-dashboard/settings' 
              className={({ isActive }) => `flex flex-row gap-5 ${isActive ? 'text-blue-300' : 'text-blue-800 hover:text-blue-300'}`}
            >
              <CiSettings/> SETTINGS
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
    </>
  );
}

export default SideNavbar;
