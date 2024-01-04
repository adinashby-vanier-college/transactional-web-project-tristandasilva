/* eslint-disable no-unused-vars */
import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import Nav from '../components/Nav';

const LoginScreen = () => {
  return (
    <div className='h-full homescreen-bg'>
      <Nav />
      <div className='w-11/12 flex justify-center h-full m-auto py-16 bg-brand-darkgrey'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;
