import React from 'react';
import Nav from '../components/nav/Nav';
import RegisterForm from '../components/forms/RegisterForm';

const RegisterScreen = () => {
  return (
    <div className='h-full homescreen-bg'>
      <Nav />
      <div className='w-11/12 flex justify-center h-full m-auto py-16 bg-brand-darkgrey'>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterScreen;
