/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import SearchBar from './SeachBar';
import { Link } from 'react-router-dom';
import CartList from './cart/CartList';
import Cookies from 'js-cookie';
import useUserFound from '../hooks/useUserFound';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const user = useUserFound();
  const token = Cookies.get('token');

  const logout = (e) => {
    e.preventDefault();
    Cookies.remove('token', { path: '' });
    Cookies.remove('user', { path: '' });
    Cookies.get('token') ? alert('Logout failed') : history.go(0);
  };

  return (
    <>
      {open && <CartList onClick={setOpen} />}
      <Navbar fluid className='bg-brand-darkgrey'>
        <Link to='/'>
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
        </Link>
        <div className='flex gap-2 md:order-2 mr-3'>
          <SearchBar></SearchBar>
          <Dropdown
            arrowIcon={false}
            inline
            className='bg-brand-darkgrey p-5'
            label={<Avatar alt='User settings' img='user-icon.svg' size='xs' />}
          >
            <div>
              {!user && (
                <div className='flex flex-col gap-4 justify-items-stretch'>
                  <Link to='/login'>
                    <Button>Login</Button>
                  </Link>
                  <Link to='/register'>
                    <Button>Register</Button>
                  </Link>
                </div>
              )}
              {user && (
                <div className='flex flex-col gap-4'>
                  <p className='text-white'>Hello, {user.first_name}</p>
                  <Button onClick={logout}>Logout</Button>
                </div>
              )}
            </div>
          </Dropdown>
          <img
            onClick={() => {
              setOpen(!open);
            }}
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
