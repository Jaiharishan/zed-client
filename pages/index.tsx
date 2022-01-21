import React from 'react';
import Link from 'next/link';
import {SearchCircleIcon, SearchIcon} from '@heroicons/react/outline';
import {Navbar, Intro, Categories, Trending} from '../components'
const index = () => {
  return (
  <>
    <Navbar />
    <Intro />
    <Categories />
    <Trending />
  </>
  );
};

export default index;
