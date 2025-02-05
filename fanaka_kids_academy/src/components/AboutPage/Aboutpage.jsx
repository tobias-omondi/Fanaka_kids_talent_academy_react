import React from 'react';
import fanakabout from "/src/assets/fanakaabout.jpeg";
import Footer from '../Footer';
import logoforfooter from '/src/assets/fanakakidslogo.jpeg';
import mainpicture from '/src/assets/abouttv.jpeg';

const Aboutpage = () => {
  return (
    <div className='mt-32 md:mt-28'>
      {/* Centering the image */}
      <div className='flex justify-center items-center'>
        <img src={fanakabout} alt='children_images' className='object-cover w-full max-h-96 rounded-b-3xl opacity-100 brightness-100' />
      </div>

      {/* Centering the mission & history section */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10 gap-10'>
        <img src={mainpicture} alt='picture of children' className='object-cover w-2/3 md:w-2/5 drop-shadow-2xl' />
        
        <div className='flex flex-col text-center md:text-left max-w-2xl'>
          <div className='mt-5 text-center'>
            <h3 className='text-gray-500 text-2xl md:text-4xl font-semibold'>Mission Statement</h3>
            <p className='text-gray-900 mt-2 max-w-md mx-auto text-center md:max-w-lg md:text-left'>
            Our mission is to inspire a lifelong love of learning in children by offering a diverse range of enriching programs. Through ballet, chess, and public speaking, we aim to cultivate confident, creative, and successful individuals who will make a positive impact on the world.
            </p>
          </div>

          <div className='mt-5 text-center'>
            <h3 className='text-gray-500 text-2xl md:text-4xl font-semibold'>History Statement</h3>
            <p className='text-gray-900 mt-2 max-w-md mx-auto text-center md:max-w-lg md:text-left'>
            Fanaka Kids Talent Academy was established in 2023 with a vision to provide exceptional arts education to children in our community. Since then, we have grown into a thriving academy, empowering countless young individuals through ballet, chess, and public speaking.
            </p>
          </div>
        </div>
      </div>

      <h1 className='text-center text-3xl font-bold mt-10'>About...</h1>

      {/* Footer */}
      <Footer image={logoforfooter} />
    </div>
  );
};

export default Aboutpage;
