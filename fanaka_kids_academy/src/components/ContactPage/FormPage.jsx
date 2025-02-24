import React, { useState } from 'react';
import { MdLocationOn, MdOutlineMail, MdWifiCalling3 } from 'react-icons/md';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Notyf styles

const FormPage = () => {
  const notyf = new Notyf();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      notyf.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      notyf.error('Please fill out all fields.');
    }
  };

  return (
    <div className='mt-10 mb-10 md:mb-24 flex justify-center items-center gap-10 md:gap-44 flex-col-reverse lg:flex-row'>
      {/* Contact Information Section */}
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-sm'>
        <div className='space-y-6'>
          <div className='flex items-center space-x-4'>
            <MdWifiCalling3 size={20} className='text-orange-600' />
            <div>
              <h3 className='font-semibold text-gray-500'>Call Us</h3>
              <p className='text-gray-600'>+254 725 477 131 <span className='text-orange-500'> || </span>+254 732 218 621</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <MdOutlineMail size={30} className='text-orange-600' />
            <div>
              <h3 className='font-semibold text-gray-500'>Email Us</h3>
              <p className='text-gray-600'>infofanaka@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <MdLocationOn size={30} className='text-orange-600' />
            <div>
              <h3 className='font-semibold text-gray-500'>Location</h3>
              <p className='text-gray-600'>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center text-2xl font-bold mb-6 text-gray-800'>Send Message</h3>
          
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
              placeholder='Enter your name'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
              placeholder='Enter your email'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              rows='4'
              value={formData.message}
              onChange={handleChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500'
              placeholder='Enter your message'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
