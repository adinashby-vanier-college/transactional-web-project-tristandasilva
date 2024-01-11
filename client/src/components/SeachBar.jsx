import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search-icon.svg';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className='flex m-1 items-center bg-[#353535] rounded w-[200px]'>
      <input
        type='text'
        placeholder='Search'
        onChange={handleChange}
        value={searchInput}
        className='bg-[#00000000] border-none w-10/12 text-[#ffffff70]'
      ></input>
      <Link to={`/search${'?q=' + searchInput}`}>
        <img
          src={searchIcon}
          alt='Search bar icon'
          width='25px'
          height='25px'
        ></img>
      </Link>
    </div>
  );
};

export default SearchBar;
