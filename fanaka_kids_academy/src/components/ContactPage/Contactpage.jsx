import React from 'react'
import Footer from '../Footer'
import logoforfooter from '/src/assets/fanakakidslogo.jpeg';
import FormPage from './FormPage';

const Contactpage = () => {
  return (
    <div className='mt-32'>

      <div className='flex flex-1 flex-row justify-center items-center bg-white'>

      <div className='text-center  text-gray-700 w-5/6'>
      <h3 className='text-3xl md:text-4xl text-red-800 font-bold mb-6'>Contact</h3>
       <p>Reach out to Fanaka Kids Talent Academy for any inquiries, enrollment, or feedback. Whether you are interested
          in enrolling your child in talent programs, we'd love to hear from you.
        </p>
           <br/>
        <p>Use the form below to send a message or reach us via our provided contact list.</p>
      </div>
      </div>
      <FormPage />
      <Footer image={logoforfooter}/>
    </div>
  )
}

export default Contactpage
