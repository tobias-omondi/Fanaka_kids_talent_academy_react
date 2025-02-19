import React, { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { MdDarkMode, MdNotifications } from 'react-icons/md';

const DashboardNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
    <div
      className={`bg-white shadow-1xl relative top-0 w-full z-20 transition-all ${isDarkMode ? 'bg-gray-900 text-orange-300' : 'bg-white text-orange-500'}`}
    >
      <ul className="w-full text-3xl flex justify-end gap-10 p-2 shadow-md">
        <li>
          <a href="#" className="hover:text-orange-300" onClick={toggleDarkMode}>
            <MdDarkMode />
          </a>
        </li>
        <li>
          <a href="#" className="text-orange-500 hover:text-orange-300">
            <CiSettings />
          </a>
        </li>
        <li>
          <a href="#" className="text-orange-500 hover:text-orange-300">
            <MdNotifications />
          </a>
        </li>
      </ul>
    </div>
    </>
  );
};

export default DashboardNavbar;
