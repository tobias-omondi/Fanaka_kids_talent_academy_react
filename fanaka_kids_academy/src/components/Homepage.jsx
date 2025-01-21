import React from 'react';
import picone from '../assets/fanakapicone.jpeg';

const Homepage = () => {
  return (
    <div className="h-screen">
      <img src={picone} alt="fanaka_kids_picture" className="object-cover w-full h-full"  />
    </div>
  );
};

export default Homepage;
