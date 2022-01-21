import React from 'react';

const Coursecard = () => {
  return <div className='flex flex-col w-64 shadow-md  border-gray-800 rounded-md hover:shadow-xl transition duration-150'>

      <img src="./home1.png" alt="course" className='w-full' />

      <div className='flex flex-col mt-2 px-2'>

        <div className='font-semibold text-xl'>ML for beginners</div>

        <div className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste facilis beatae temporibus, quod dolorum molestias eius suscipit dolores,
        </div>

        <div className='flex gap-2 mt-3'>
            <div className='tag-sm'>ML</div>
            <div className='tag-sm'>Python</div>
        </div>

        <div className='flex justify-between items-center my-3'>
            <div className='text-xl font-bold'>$50</div>
            <div className='buy-btn'>Buy</div>
        </div>
      </div>


  </div>;
};

export default Coursecard;
