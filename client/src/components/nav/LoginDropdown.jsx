import React, { Component, useState } from 'react';
import LoginForm from '../forms/LoginForm';
import useQuery from '../../hooks/useQuery';
import axios from 'axios';
import useUserFound from '../../hooks/useUserFound';
import Cookies from 'js-cookie';
import RegisterForm from '../forms/RegisterForm';

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);
  const [registerView, setRegisterView] = useState(
    localStorage.getItem('registerView')
  );
  const user = useUserFound();

  // localStorage.setItem('registerView', registerView);

  const logout = (e) => {
    e.preventDefault();
    Cookies.remove('token', { path: '' });
    Cookies.remove('user', { path: '' });
    Cookies.get('token') ? alert('Logout failed') : location.reload();
  };

  return (
    <div className=' bg-brand-darkgrey relative flex justify-center'>
      <img
        className='h-8'
        src='user-icon.svg'
        onClick={() => {
          setOpen(!open);
        }}
      ></img>
      {open && (
        <div className='absolute h-fit m-3 p-4 shadow-lg rounded-md bg-neutral-800 z-40 flex flex-col justify-start top-7 -right-7'>
          {user ? (
            <div className='flex flex-col items-center text-white'>
              <p className='whitespace-nowrap text-xl font-extralight'>
                Hello, {user.first_name}
              </p>
              <form onSubmit={logout}>
                <input
                  className='bg-red-800 p-2 w-32 text-md m-3 rounded-lg'
                  type='submit'
                  value={'Logout'}
                />
              </form>
            </div>
          ) : localStorage.getItem('registerView') == 'true' ? (
            <RegisterForm />
          ) : (
            <LoginForm />
          )}
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
