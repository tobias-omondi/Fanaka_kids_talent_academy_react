import { useEffect } from 'react';
import Footer from './Footer';
import logoforfooter from '../assets/fanakakidslogo.jpeg'
import AOS from "aos";
import "aos/dist/aos.css"; 

const CommunImage = ({ image }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <div className='mt-14 relative' data-aos="fade-up"
    data-aos-duration="500">
      {/* Image */}
      <img src={image} alt='children_playing_chess' className='w-full max-h-96  object-cover'/>

      {/* Overlay Text and Button */}
      <div className='absolute top-32 md:top-1/4 md:left-72 left-32 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
        <h2 className='text-2xl text-start md:text-5xl font-bold mb-4'>
        Fanaka kids <br/> Academy Talent<br/> builds your child's<br/> skills and creativity.
        </h2>
        {/* <button
          type='button'
          className='bg-white bg-opacity-60 hover:bg-opacity-90 text-black px-3 md:px-6 py-2 rounded-lg text-xl mr-16 md:mr-64' 
        >
          Learn More
        </button> */}
      </div>
      <Footer image = {logoforfooter} />
    </div>
  );
};

export default CommunImage;