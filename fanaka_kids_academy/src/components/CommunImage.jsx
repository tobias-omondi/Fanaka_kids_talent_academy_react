import React from 'react';
import Footer from './Footer';

const CommunImage = ({ image }) => {
  return (
    <div className='mt-14 relative'>
      {/* Image */}
      <img src={image} alt='children_playing_chess' className='w-full max-h-96 object-cover'/>

      {/* Overlay Text and Button */}
      <div className='absolute top-1/2 left-80 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
        <h2 className='text-9xl text-start md:text-4xl font-bold mb-4'>
          What does Fanaka <br/> Talent Offer to <br/> your Child?
        </h2>
        <button
          type='button'
          className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600'
        >
          Learn More
        </button>
      </div>
      <div className='bg-orange-600 py justify-center'>
        <p className='text-center text-white text-2xl'>GET INVOLVED WITH FANAKA TALENT ACADEMY.</p>
      </div>
      <Footer />
    </div>
  );
};

export default CommunImage;