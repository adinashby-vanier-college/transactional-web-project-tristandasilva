import React, { Component, useState } from 'react';
import { Navbar } from 'flowbite-react';
import SearchBar from '../SeachBar';

import CartList from '../cart/CartList';
import LoginDropdown from './LoginDropdown';
import NavTabs from './NavTabs';

const Nav = () => {
  const [open, setOpen] = useState(false);

  localStorage.setItem('registerView', false);

  return (
    <>
      {open && <CartList onClick={setOpen} />}
      <Navbar fluid className='bg-brand-darkgrey'>
        <Navbar.Brand href='/'>
          <img
            src='logo.svg'
            className='ml-3 mr-3 h-6 sm:h-9'
            alt='VinylVault Logo'
          />
          <span className='self-center whitespace-nowrap text-l font-semibold text-white'>
            VinylVault
          </span>
        </Navbar.Brand>
        <div className='flex gap-3 items-center'>
          <SearchBar></SearchBar>
          <LoginDropdown />
          <img
            onClick={() => {
              setOpen(!open);
            }}
            src='cart-icon.svg'
            alt='Cart icon'
            className='h-8'
          ></img>
        </div>
      </Navbar>
      <NavTabs />
    </>
  );
};

export default Nav;
