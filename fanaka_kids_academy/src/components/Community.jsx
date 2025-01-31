import React from 'react';

const Community = ({ title, description, image }) => {
  return (
    <div className="mt-28 flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 lg:p-12 rounded-lg">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h2 className="text-red-900 text-3xl lg:text-4xl font-bold mb-4">
          {title}
          <span className="block w-28 h-1 bg-yellow-500 mt-2"></span>
        </h2>
        <div className='underline-offset-auto'></div>
        <p className="text-gray-700 text-lg lg:text-xl">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img src={image} alt="A child dancing" className="w-72 h-96 lg:w-96 lg:h-96 object-cover rounded-lg shadow-md"/>
      </div>
    </div>
  );
};

export default Community;
// A community of young talents, <br/> offering Ballet, Chess and Public <br/> Speaking Perfomance
// A vibrant community of young talent is comming together to show case their extraodinary abilities.
//             From graceful movements of ballet dancers to the strategic minds of chess players and the captivating oratora, these children are poised to inspire and amaze. Their perfomance promise to be a delightful blend of 
//             artistry, intellect, and eloquence