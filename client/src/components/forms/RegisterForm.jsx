import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import axios from '../../api/axiosConfig';
import setCookies from '../../../helpers/setCookies';
import { Link } from 'react-router-dom';

const RegisterForm = ({ change }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPass, setConfirmedPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const register = (e) => {
    e.preventDefault();
    if (password != confirmedPass) {
      setErrorMessage('Passwords do not match.');
    } else {
      axios
        .post('/users/register', {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        })
        .then((res) => {
          setCookies(res.data);
          setSuccessMessage('Registration successful!');
          if (errorMessage) {
            setErrorMessage('');
          }
          setTimeout(() => {
            location.reload();
          }, 1200);
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
        });
    }
  };

  return (
    <form className='text-white' onSubmit={register}>
      <div className='mb-3'>
        <label className='font-thin'>First name</label>
        <input
          type='text'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm w-full'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='font-thin'>Last name</label>
        <input
          type='text'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm w-full'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='font-thin'>Email</label>
        <input
          type='email'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='font-thin'>Password</label>
        <input
          type='password'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm w-full'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='font-thin'>Confirm password</label>
        <input
          type='password'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm w-full'
          value={confirmedPass}
          onChange={(e) => setConfirmedPass(e.target.value)}
        />
      </div>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      {successMessage && <p className='success'>{successMessage}</p>}
      <div className='flex items-center gap-5 mt-5'>
        <p
          className='whitespace-nowrap underline underline-offset-4 cursor-pointer'
          onClick={(e) => {
            localStorage.setItem('registerView', false);
            change();
            // window.dispatchEvent(new Event('storage'));
          }}
        >
          I have an account.
        </p>
        <input
          className='bg-yellow-500 px-3 p-2 rounded-lg w-full cursor-pointer'
          type='submit'
          value={'Register'}
        />
      </div>
    </form>
  );
};

export default RegisterForm;
