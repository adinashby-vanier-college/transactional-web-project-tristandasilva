import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';
import setCookies from '../../../helpers/setCookies';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

const RegisterForm = () => {
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
        .post('http://localhost:5050/users/register', {
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
    <div className='authModal'>
      <form className='flex flex-col gap-6' onSubmit={register}>
        <div className='flex flex-col gap-1'>
          <label>First name</label>
          <input
            type='text'
            placeholder='John'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Last name</label>
          <input
            type='text'
            placeholder='Smith'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Confirm password</label>
          <input
            type='password'
            placeholder='Confirmed pass'
            value={confirmedPass}
            onChange={(e) => setConfirmedPass(e.target.value)}
          />
        </div>
        {successMessage && <p className='text-sm success'>{successMessage}</p>}
        {errorMessage && <p className='text-sm error'>{errorMessage}</p>}
        <Button type='submit' className='bg-brand-darkorange mt-5 rounded-md'>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
