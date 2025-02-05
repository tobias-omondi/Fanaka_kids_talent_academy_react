import React from 'react'
import fanakabout from "/src/assets/fanakaabout.jpeg"
import Footer from '../Footer'
import logoforfooter from '/src/assets/fanakakidslogo.jpeg'

const Aboutpage = () => {
  return (
    <div className='mt-40'>
      <div>
        <img src={fanakabout} alt='children_images' className='object-cover w-full max-h-96 rounded-tl-2xl'/>
      </div>
      <h1>About...</h1>
      <Footer image={logoforfooter}/>
    </div>
  )
}

export default Aboutpage
