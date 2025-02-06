import React from 'react';
import fanakabout from "/src/assets/fanakaabout.jpeg";
import Footer from '../Footer';
import logoforfooter from '/src/assets/fanakakidslogo.jpeg';
import mainpicture from '/src/assets/abouttv.jpeg';
import Testimonial from './Testimonial';
import testmonialimage1 from '/src/assets/mother.jpg'
import testmonialimage2 from '/src/assets/momm.jpeg'
import testmonialimage3 from '/src/assets/dad.jpeg'
import testmonialimage4 from '/src/assets/mammy.jpg'
import testmonialimage5 from '/src/assets/ddg_21262678.jpg'
import { Sliders } from 'lucide-react';
import { title } from 'motion/react-client';

const Aboutpage = () => {
  const slide = [
    {
      image: testmonialimage1,
      title: "Mama Talia",
      description: "Talia loves ballet! She’s more confident and graceful. I’m so proud of her progress.",
    },
    {
      image: testmonialimage2,
      title: "Mama Bradly",
      description: "Bradly was shy, but now he speaks in front of people with so much confidence. Thank you!",
    },
    {
      image: testmonialimage3,
      title: "Kevin's Dad",
      description: "Kevin’s chess skills are amazing! He thinks faster and solves problems easily now.",
    },
    {
      image: testmonialimage4,
      title: "Sasha's Mom",
      description: "Sasha found her passion in ballet. She dances with joy and can’t wait for class every week!",
    },
    {
      image: testmonialimage5,
      title: "Teacher",
      description: "It’s wonderful seeing the kids grow in confidence and talent. Fanaka is making a big difference!",
    }
  ];
  
  return (
    <div className='mt-32 md:mt-28'>
      {/* Centering the image */}
      <div className='flex justify-center items-center'>
        <img src={fanakabout} alt='children_images' className='object-cover w-full max-h-96 rounded-b-3xl opacity-100 brightness-100' />
      </div>

      {/* Centering the mission & history section */}
      <div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10 gap-10'>
        <img src={mainpicture} alt='picture of children' className='object-cover w-5/6 md:w-2/5 drop-shadow-2xl' />
        
        <div className='flex flex-col text-center md:text-left max-w-2xl'>
          <div className='mt-5 text-center'>
            <h3 className='text-red-800 text-2xl md:text-4xl font-semibold'>Mission Statement</h3>
            <p className='text-gray-600 mt-2 max-w-md mx-auto text-center md:max-w-lg md:text-left'>
            Our mission is to inspire a lifelong love of learning in children by offering a diverse range of enriching programs. Through ballet, chess, and public speaking, we aim to cultivate confident, creative, and successful individuals who will make a positive impact on the world.
            </p>
          </div>

          <div className='mt-5 text-center'>
            <h3 className='text-red-800 text-2xl md:text-4xl font-semibold'>History Statement</h3>
            <p className='text-gray-600 mt-2 max-w-md mx-auto text-center md:max-w-lg md:text-left'>
            Fanaka Kids Talent Academy was established in 2023 with a vision to provide exceptional arts education to children in our community. Since then, we have grown into a thriving academy, empowering countless young individuals through ballet, chess, and public speaking.
            </p>
          </div>
        </div>
      </div>
      <Testimonial slides={slide} />
      {/* Footer */}
      <Footer image={logoforfooter} />
    </div>
  );
};

export default Aboutpage;
