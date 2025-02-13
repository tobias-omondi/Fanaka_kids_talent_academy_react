import { useNavigate } from "react-router-dom";
import picone from '../assets/fanakapicone.jpeg';
import pictwo from '../assets/fanaka2.jpeg'
import picthree from '../assets/fanaka3.jpeg'
import childimage from '../assets/community.jpeg'
import childimage2 from '../assets/community2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination , Autoplay, Navigation} from 'swiper/modules';
import './slider.css'
import { GiBallerinaShoes } from "react-icons/gi"
import { FaChess } from "react-icons/fa6";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import Community from './Community';
import SectionCommun from './SectionCommun';



const Homepage = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about"); 
  };
  const handleblogClick = () => {
    navigate("/blog"); 
  };
  const handlecontactClick = () => {
    navigate("/contact"); 
  };

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
           <div className='absolute top-1/2 md:top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
            <h3 className='text-3xl md:text-5xl font-bold mb-4'>Welcome , Little Explorers!</h3>
             <button type='button' className='bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-xl' onClick={handleClick} > Learn More</button> </div>
        </SwiperSlide>

        <SwiperSlide className='relative brightness-75'>
         <img src={pictwo}  alt="fanaka_kids_picture"  className="object-cover w-full h-full" />
           <div className='absolute top-1/2 md:top-96  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
            <h3 className='text-3xl md:text-5xl font-bold mb-4'>Adventure Awaits You!</h3>
             <button type='button' className='bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-xl' onClick={handleblogClick} >More on Blog</button> </div>
        </SwiperSlide>

        <SwiperSlide className='relative brightness-75'>
         <img src={picthree}  alt="fanaka_kids_picture"  className="object-cover w-full h-full" />
           <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white'>
            <h3 className='text-3xl md:text-5xl font-bold mb-4'>Play, Learn , Imagine!</h3>
             <button type='button' className='bg-black bg-opacity-60 hover:bg-opacity-90 text-white px-6 py-2 rounded-lg text-xl' onClick={handlecontactClick} > Contact us</button> </div>
        </SwiperSlide>
      </Swiper>
      </div>
        {/* Centered Container */}
        <div className="absolute top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-orange-600 shadow-2xl rounded-lg py-6 md:py-5">
        <div className=" max-h-48 w-full flex items-center justify-center md:px-28 ">
          <h3 className="text-center text-white text-1xl md:text-4xl w-full font-light font-serif">
            Best place <br /> for your child
          </h3>
        </div>
        <div className='text-yellow-50 flex justify-center w-full gap-10 md:gap-52'>
            <GiBallerinaShoes size={50} />
            <FaChess size={50} />
            <PiMicrophoneStageDuotone size={50} />
          </div>
      </div>
      <Community 
      title="A community of young talents,offering Ballet, Chess and Public Speaking Perfomance" 
      description="A vibrant community of young talent is coming together to showcase their extraordinary abilities.
From the graceful movements of ballet dancers to the strategic minds of chess players and the captivating orators, these children are poised to inspire and amaze. Their performances promise to be a delightful blend of artistry, intellect, eloquence, and public speaking."
      image = {childimage}
      />
      <SectionCommun image={childimage2} />
    </div>
  );
};

export default Homepage;


