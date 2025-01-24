import React, { Fragment } from 'react';
import picone from '../assets/fanakapicone.jpeg';
import pictwo from '../assets/fanaka2.jpeg'
import picthree from '../assets/fanaka3.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Autoplay, Navigation} from 'swiper/modules';
import './slider.css'


const Homepage = () => {
  return (
    <div className="h-screen">
      
      <div className='mt-28'>
      <Swiper
      modules={[Pagination , Autoplay , Navigation]}
      navigation = {true}
      pagination = {{
        dynamicBullets:true,
        clickable:true
      }}
      autoplay = {{
        delay:5000,
        disableOnInteraction:false,
      }}
      className='swiper-container max-h-screen'
      >
        <SwiperSlide className='relative brightness-75'>
         <img src={picone}  alt="fanaka_kids_picture"  className="object-cover w-full h-full" />
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
            <h3 className='text-3xl md:text-5xl font-bold mb-4'>Welcome , Little Explorers!</h3>
             <button type='button' className='bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-xl' > Learn More</button> </div>
        </SwiperSlide>

        <SwiperSlide className='relative brightness-75'>
         <img src={pictwo}  alt="fanaka_kids_picture"  className="object-cover w-full h-full" />
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
            <h3 className='text-3xl md:text-5xl font-bold mb-4'>Adventure Awaits You!</h3>
             <button type='button' className='bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-xl' > Learn More</button> </div>
        </SwiperSlide>

        <SwiperSlide className='relative brightness-75'>
         <img src={picthree}  alt="fanaka_kids_picture"  className="object-cover w-full h-full" />
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
            <h3 className='text-3xl md:text-5xl font-bold mb-4'>Play, Learn , Imagine!</h3>
             <button type='button' className='bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-xl' > Learn More</button> </div>
        </SwiperSlide>
      </Swiper>
      </div>


    </div>
  );
};

export default Homepage;


