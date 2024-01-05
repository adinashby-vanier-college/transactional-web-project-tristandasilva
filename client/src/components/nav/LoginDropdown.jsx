import React, { Component, useState } from 'react';
import LoginForm from './LoginForm';
import useQuery from '../../hooks/useQuery';
import axios from 'axios';
import useUserFound from '../../hooks/useUserFound';
import Cookies from 'js-cookie';

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);
  // const response = useQuery('http://localhost:5050/users/');
  const user = useUserFound();

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
        <div className='absolute h-fit m-3 p-4 shadow-lg rounded-md bg-neutral-800 z-40 flex justify-start top-7 -right-7'>
          {user ? (
            <div className='flex flex-col items-center text-white'>
              <p className='whitespace-nowrap text-xl font-extralight'>
                Hello, {user.first_name}
              </p>
              <form
                onSubmit={logout}
                // onSubmit={async () => {
                //   await axios.get('http://localhost:5050/users/logout', {
                //     withCredentials: true,
                //   });
                // }}
              >
                <input
                  className='bg-red-800 p-2 w-32 text-md m-3 rounded-lg'
                  type='submit'
                  value={'Logout'}
                />
              </form>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
