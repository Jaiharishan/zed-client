import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return <div className='flex items-center justify-between px-3 bg-yellow-200 w-full h-16 fixed top-0 left-0'>

  <Link href="/">
    <a>
      <img className='w-10 h-10' src="./brand.png" />
    </a>
  </Link>

  <div className='flex items-center rounded-full bg-white pl-2 pr-3 py-2 w-1/2'>
    <input type="text" className='outline-none px-2 w-full' placeholder='search for courses' />
    <img src="./search.png" className='w-4 h-4 text-gray-500' alt=""/>
  </div>


  <div className='flex items-center gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" className=" w-10 p-2 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>


    <Link href='/register'>
        <a>
        <div className='rounded-md hidden md:block bg-gray-800 text-yellow-200 px-5 py-2'>
            Signup
        </div>
        </a>
    </Link>
    

    <Link href='/login'>
        <a>
        <div className='rounded-md hidden md:block text-gray-800 bg-yellow-100 px-5 py-2'>
            Login
        </div>
        </a>
    </Link>

    
  </div>

</div>;
};

export default Navbar;
