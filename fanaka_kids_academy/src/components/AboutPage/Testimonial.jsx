import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'

const Testimonial = ({ slides }) => {
  return (
    <div className="mt-20 px-4 md:px-0">
      <div><h3 className='text-center text-gray-500 text-2xl md:text-4xl '>Testimonial</h3></div>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
        
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center text-center p-4 md:p-6">
              <img 
                src={slide.image} 
                alt={`Slide ${index + 1}`} 
                className="max-w-28 max-h-28 md:w-32 md:h-32 object-cover rounded-full shadow-xl mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-500">{slide.title}</h3>
              <p className="text-sm md:text-base px-2 bg-slate-200 rounded-b-xl h-32 text-gray-600 drop-shadow-md">
                <span className="text-orange-500 text-4xl font-serif">"</span>
                {slide.description}
                <span className="text-orange-500 text-4xl font-serif">"</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonial