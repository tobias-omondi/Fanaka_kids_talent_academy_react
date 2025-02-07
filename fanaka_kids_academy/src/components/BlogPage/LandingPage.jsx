import React from 'react';
import chessBoard from '/src/assets/chessBoard.jpg';

const LandingPage = () => {
  return (
    <div className='relative'>
      <img src={chessBoard} alt='chess board' className='h-96 w-full object-cover md:h-96' />
      <div className='absolute top-2/3 left-4 right-4 flex justify-between items-center z-10'>
        <h3 className='text-xl font-bold text-white'>Our Blog</h3>
        <a href='#' className='text-xl font-bold text-white'>Events & Dates</a>
      </div>
      <span className='absolute top-[75%] left-0 w-full h-1 bg-orange-600 z-10'></span>
    </div>
  );
};

export default LandingPage;
