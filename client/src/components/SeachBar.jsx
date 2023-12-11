/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

const SearchBar = () => {
  return (
    <div className='flex m-1 items-center justify-between p-1 bg-[#353535] rounded w-[200px]'>
      <span className='text-[#FFFFFF50] pl-1'>Search</span>
      <img
        src='../public/search-icon.svg'
        alt='Search bar icon'
        width='25px'
        height='25px'
      ></img>
    </div>
  );
};

export default SearchBar;
