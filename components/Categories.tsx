import React from 'react';

const Categories = () => {

  return <>
  <div className='flex w-full justify-center text-4xl sm:text-5xl font-bold mb-8'>
      Top Categories
  </div>
   <div className='flex flex-wrap items-center justify-center gap-12 mb-10'>
      
      <div className='skill-icon'>
        <img src="./art.png" className='w-16 h-16' alt="" />
        <p className='text-lg '>Arts</p>
      </div>

      <div className='skill-icon'>
        <img src="./photography.png" className='w-16 h-16' alt="" />
        <p className='text-lg'>Photography</p>
      </div>
      
      <div className='skill-icon'>
        <img src="./research.png" className='w-16 h-16' alt="" />
        <p className='text-lg'>Marketing</p>
      </div>

      <div className='skill-icon'>
        <img src="./robotics.png" className='w-16 h-16' alt="" />
        <p className='text-lg'>Robotics</p>
      </div>

      <div className='skill-icon'>
        <img src="./music.png" className='w-16 h-16' alt="" />
        <p className='text-lg'>Music</p>
      </div>
      
      <div className='skill-icon'>
        <img src="./webdevelopment.png" className='w-16 h-16' alt="" />
        <p className='text-lg'>Development</p>
      </div>
  </div>
  </>;
};

export default Categories;
