import React from 'react';
import playingchess from '../assets/community4.jpeg';
import CommunImage from './CommunImage';

const SectionCommun = ({ image }) => {
  return (
    <>
      {/* Main container */}
      <div className='mt-10 flex flex-col-reverse md:flex-row justify-start p-4 relative'>
        {/* Image styling */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={image}
            alt='child_dancing'
            className='w-80 h-96 md:w-96 md:h-96 object-cover rounded-lg shadow-md mt-7 md:mt-0'
          />
        </div>

        {/* Cards container */}
        <div className='w-full md:w-2/3 mt-8 md:mt-14 flex flex-col gap-4 md:absolute md:left-96 md:top-9 md:flex md:flex-row'>
          {/* Card 1 */}
          <div className='bg-white shadow-2xl text-center p-6 rounded-lg w-80 md:w-96'>
            <h3 className='text-2xl font-semibold text-gray-600 mb-4'>
              Advocacy & Student Blog
            </h3>
            <p className='text-gray-500 mb-4'>
              Empowering children through arts, strategy, and communication.
            </p>
            <button
              type='button'
              className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'
            >
              Visit
            </button>
          </div>

          {/* Card 2 */}
          <div className='bg-yellow-500 shadow-2xl text-center p-6 rounded-lg w-80 md:w-96'>
            <h3 className='text-2xl font-semibold text-gray-600 mb-4'>
              Events, Programs & Dates
            </h3>
            <p className='text-gray-500 mb-4'>
              A year of growth and achievement—recapping our 2024 and looking ahead to 2025.
            </p>
            <button
              type='button'
              className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'
            >
              Visit
            </button>
          </div>

          {/* Card 3 */}
          <div className='bg-red-800 shadow-2xl text-center p-6 rounded-lg w-80 md:w-96'>
            <h3 className='text-2xl font-semibold text-gray-600 mb-4'>
              Videos & Gallery Page
            </h3>
            <p className='text-gray-500 mb-4'>
              A Visual Journey: Watch our students shine in ballet, chess, and public speaking performances.
            </p>
            <button
              type='button'
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