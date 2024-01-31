// import Cookies from "js-cookie";
// import useUserFound from "../../hooks/useUserFound";
// import React, { Component, useState } from "react";
// import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
// import SearchBar from "../SeachBar";

// import { Link } from "react-router-dom";
// import CartList from "../cart/CartList";
// import LoginDropdown from "./LoginDropdown";
// import NavTabs from "./NavTabs";

import React, { Component, useState } from 'react';
import { Navbar } from 'flowbite-react';
import SearchBar from '../SeachBar';

import CartList from '../cart/CartList';
import LoginDropdown from './LoginDropdown';
import NavTabs from './NavTabs';
import LanguageToggle from '../LanguageToggle';

const Nav = () => {
  const [open, setOpen] = useState(false);

  localStorage.setItem('registerView', false);

  return (
    <>
      {open && <CartList onClick={setOpen} />}
      <Navbar fluid className='bg-brand-darkgrey '>
        <div className='flex gap-5 items-center'>
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
          <LanguageToggle></LanguageToggle>
        </div>
        <div className='flex gap-3 items-center sm:flex sm:justify-between sm:w-full'>
          <SearchBar></SearchBar>
          <div className='flex'>
            <LoginDropdown />
            <img
              onClick={() => {
                setOpen(!open);
              }}
              src='cart-icon.svg'
              alt='Cart icon'
              className='h-8 ms-5'
            ></img>
          </div>
        </div>
      </Navbar>
      <NavTabs />
    </>
  );
};

export default Nav;
