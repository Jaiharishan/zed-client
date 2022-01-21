import React from 'react';
import { Coursecard } from '.';
const Trending = () => {
  return <>
    <div className='text-4xl sm:text-5xl flex justify-center mb-8 font-semibold mt-16'>
        Trending Courses
    </div>
    <div className='flex flex-col mb-5'>

        <div className='flex items-center justify-center gap-4'>
            <div className='tag'>Web</div>
            <div className='tag'>UI/UX</div>
            <div className='tag'>ML</div>
            <div className='tag'>Blockchain</div>
        </div>

        <div className='flex justify-center w-full flex-wrap gap-10 mt-8'>
            <Coursecard />
            <Coursecard />
            <Coursecard />
        </div>
        

    </div>
  </>
};

export default Trending;
