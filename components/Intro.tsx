import React from 'react';

const Intro = () => {
  return( 
    <div className='flex items-center justify-between w-full'>

        <div className='hidden md:flex w-1/2 h-screen items-center justify-center'>
            <img src="./home1.png" alt="home1" className='' />
        </div>

        <div className='w-full md:w-1/2 h-screen flex items-center justify-center flex-col px-3'>

            <p className='text-5xl sm:text-7xl font-bold'>Learn Together <span className='text-yellow-300'>Grow</span> Together</p>

            <p className='mt-7 text-lg'>Learn from over 1000+ creators and 1M+ learners and be part of this wonderful adventure and learn whatever you have dreamt to learn aboun. Explaore our 1000+ courses and get Zedified...</p>

            <div className='rounded-full bg-yellow-200 border border-gray-800 px-8 py-2 self-start mt-8 text-xl cursor-pointer'>Explore Now!</div>
        </div>
      
    </div>
  )
};

export default Intro;
