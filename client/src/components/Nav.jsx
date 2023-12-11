/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import SearchBar from './SeachBar';
import LoginDropdown from './LoginDropdown';

const Nav = () => {
  return (
    <Navbar fluid className='bg-brand-darkgrey'>
      <Navbar.Brand href='#'>
        <img src='logo.svg' className='mr-3 h-6 sm:h-9' alt='VinylVault Logo' />
        <span className='self-center whitespace-nowrap text-l font-semibold text-white'>
          VinylVault
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <SearchBar></SearchBar>
        <Dropdown
          arrowIcon={false}
          inline
          className='bg-brand-darkgrey'
          label={<Avatar alt='User settings' img='user-icon.svg' size='xs' />}
        >
          <LoginDropdown></LoginDropdown>
        </Dropdown>
        <Navbar.Toggle />
        <img
          src='cart-icon.svg'
          alt='Cart icon'
          width='25px'
          height='25px'
        ></img>
      </div>
    </Navbar>
  );
};

export default Nav;
