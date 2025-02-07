import React from 'react'
import LandingPage from './LandingPage';
import SectionTwo from './SectionTwo';
import Footer from '../Footer';
import logoforfooter from '/src/assets/fanakakidslogo.jpeg';
import EventsDates from './EventsDates';
import StudentsBlog from './StudentsBlog';

const MainBlog = () => {
  return (
    <div className='mt-28'>
      <LandingPage />
      <SectionTwo/>
      <StudentsBlog/>
      <EventsDates/>
      <Footer image={logoforfooter}/>
    </div>
  )
}

export default MainBlog;
