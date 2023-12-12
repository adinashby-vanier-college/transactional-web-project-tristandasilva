/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import Nav from '../components/Nav';
import '../index.css';
import AlbumItem from '../components/AlbumItem';
import AlbumItemList from '../components/AlbumItemList';
import vinylList from '../vinyls.json';

const HomeScreen = () => {
  const [vinyls, setVinyls] = useState(vinylList);

  return (
    <div className='h-screen homescreen-bg overflow-auto'>
      <Nav></Nav>
      {/* Content Container */}
      <div className='w-11/12 m-auto h-full bg-brand-darkgrey px-12'>
        {/* Title Container With Icon */}
        <div className='flex gap-4 items-center'>
          <img src='star-icon.svg'></img>
          <h2 className='text-white text-xl font-semibold'>Trending</h2>
        </div>
        {/* ----------- End --------- */}

        {/* Horizontal album list */}
        <AlbumItemList vinyls={vinylList} />
        {/* -------- End -------- */}
      </div>
    </div>
  );
};

export default HomeScreen;
