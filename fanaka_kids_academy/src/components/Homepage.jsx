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
        dynamicBullets:true
      }}
      autoplay = {{
        delay:5000,
        disableOnInteraction:false,
      }}
      className='swiper-container max-h-screen'
      >

        <SwiperSlide className='brightness-100'>
        <img src={picone} alt="fanaka_kids_picture" className="object-cover w-full h-full"/>
        </SwiperSlide>
        <SwiperSlide >
        <img src={pictwo} alt="fanaka_kids_picture" className="object-cover w-full  h-full"  />
        </SwiperSlide>
        <SwiperSlide >
        <img src={picthree} alt="fanaka_kids_picture" className="object-cover w-full h-full"  />
        </SwiperSlide>
      </Swiper>
      </div>


    </div>
  );
};

export default Homepage;


