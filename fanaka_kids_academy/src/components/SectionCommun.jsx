import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import playingchess from '../assets/community4.jpeg';
import CommunImage from './CommunImage';
import AOS from "aos";
import "aos/dist/aos.css"; 

const SectionCommun = ({ image }) => {
  const navigate = useNavigate();
  const handleblogClick = () => {
    navigate("/blog"); 
  };
  const handleeventsClick = () => {
    navigate("/blog"); 
  };
  const handlemediaClick = () => {
    navigate("/images"); 
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 900, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

  return (
    <>
      {/* Main container */}
      <div className='mt-10 flex flex-1 flex-col-reverse md:flex-row justify-start p-4 relative'>
        {/* Image styling */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={image}
            alt='child_dancing'
            className='w-80 h-96 md:w-96 md:h-96 object-cover rounded-lg shadow-md mt-7 md:mt-0'
            data-aos = "fade-up-right"
          />
        </div>

        {/* Cards container */}
        <div className='w-full md:w-2/3 mt-8 md:mt-14 flex flex-col gap-5 md:absolute md:left-1/4 md:top-9 md:flex md:flex-row items-center md:max-h-80 md:max-w-3/4' data-aos="fade-up">
          {/* Card 1 */}
          <div className='bg-white shadow-2xl text-center p-6 rounded-lg w-80 md:w-full'>
            <h3 className='text-2xl font-semibold text-gray-600 mb-4'>
              Our Mission & History 
            </h3>
            <p className='text-gray-500 mb-4'>
              Empowering children through arts, strategy, and communication.
            </p>
            <button
              type='button'
              onClick={handleblogClick}
              className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'
            >
              Visit
            </button>
          </div>
          

          {/* Card 2 */}
          <div className='bg-orange-600 shadow-2xl text-center p-6 rounded-lg w-80 md:w-full'>
            <h3 className='text-2xl font-semibold text-gray-300 mb-4'>
            Student Blog ,Events & Dates
            </h3>
            <p className='text-gray-300 mb-4'>
              A year of growth and achievement—recapping our 2024 and looking ahead to 2025.
            </p>
            <button
              type='button'
              onClick={handleeventsClick}
              className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'
            >
              Visit
            </button>
          </div>

          {/* Card 3 */}
          <div className='bg-red-800 shadow-2xl text-center p-6 rounded-lg w-80 md:w-full'>
            <h3 className='text-2xl font-semibold text-gray-400 mb-4'>
              Videos & Gallery Page
            </h3>
            <p className='text-gray-400 mb-1'>
              A Visual Journey: Watch our students shine in ballet, chess, and public speaking performances.
            </p>
            <button
              type='button'
              onClick={handlemediaClick}
              className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'
            >
              Visit
            </button>
          </div>
        </div>
      </div>

      {/* Additional component */}
      <CommunImage image={playingchess} />
    </>
  );
};

export default SectionCommun;