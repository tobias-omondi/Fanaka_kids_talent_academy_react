import React from 'react'
import balletkid from '/src/assets/a child ballet.jpeg';

const SectionTwo = () => {
  return (
    <div className='mt-20 mb-10 flex flex-col-reverse md:flex md:flex-row justify-evenly items-center'>
        <img src={balletkid} alt='ballet child' className='w-2/3 md:w-3/12 h-96 object-cover shadow-lg rounded-s-3xl mt-5'/>
        <div className='max-w-80 md:max-w-96'>
            <h3 className='text-red-800 font-bold text-3xl md:text-4xl text-center mb-5'>BLog</h3>
            <p className='text-xl text-gray-600 text-center'>Welcome to the Fanaka Kids Talent Academy Blog! Here, we share awesome stories about our talented students, cool tips to help you shine, and fun updates on everything happening at the academy. Whether you're looking for inspiration or just want to stay in the loop, we've got you covered. Keep checking back for the latest news and exciting events! ✨</p>
        </div>
    </div>
  )
}

export default SectionTwo
