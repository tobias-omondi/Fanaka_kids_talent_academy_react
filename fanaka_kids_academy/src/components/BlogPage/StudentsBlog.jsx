import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const StudentsBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/blog/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className='mt-10'>
      <h3 className='text-center mb-12 text-2xl text-red-800 font-semibold'>STUDENTS BLOG DETAILS</h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-5xl mx-auto"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {blogs.map((blog) => (
           <SwiperSlide key={blog.id} className='p-2 border rounded-lg shadow-md bg-white'>
             <div className='h-80 sm:h-64 md:h-64 lg:h-72  mb-10'>
               <h3 className='text-xl font-bold text-orange-500 mb-2 text-center'>{blog.title}</h3>
               <p className='text-gray-700 text-center'>{blog.description}</p>
             </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentsBlog;
