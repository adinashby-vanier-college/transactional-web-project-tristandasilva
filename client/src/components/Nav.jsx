/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import SearchBar from './SeachBar';
import LoginDropdown from './LoginDropdown';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Navbar fluid className='bg-brand-darkgrey'>
        <Navbar.Brand href='#'>
          <img
            src='logo.svg'
            className='ml-3 mr-3 h-6 sm:h-9'
            alt='VinylVault Logo'
          />
          <span className='self-center whitespace-nowrap text-l font-semibold text-white'>
            VinylVault
          </span>
        </Navbar.Brand>
        <div className='flex gap-2 md:order-2 mr-3'>
          <SearchBar></SearchBar>
          <Dropdown
            arrowIcon={false}
            inline
            className='bg-brand-darkgrey'
            label={<Avatar alt='User settings' img='user-icon.svg' size='xs' />}
          >
            <div>
              <Link to='/login'>
                <Button>LOGIN</Button>
              </Link>
              <Link to='/register'>
                <Button>REGISTER</Button>
              </Link>
            </div>
          </Dropdown>
          <img
            src='cart-icon.svg'
            alt='Cart icon'
            width='25px'
            height='25px'
          ></img>
        </div>
      </Navbar>
      <div className='h-8 text-white px-40 flex justify-between items-center bg-[#8CBEB270]'>
        <p>Genre</p>
        <p>Trending</p>
        <p>Recent</p>
        <p>Discount</p>
        <p>Discovery</p>
      </div>
    </>
  );
};

export default Nav;
