/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5050/users/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status == 200) {
          alert(`Hello ${res.data.user.first_name}!`);
          Cookies.set('token', res.data.token);
          Cookies.set('user', JSON.stringify(res.data.user));
          history.go(-1);
        }
      })
      .catch((err) => {
        if (err.response.status >= 400) {
          setErrorMessage(err.response.data.message);
        } else {
          alert(err);
        }
      });
  };

  return (
    <div className='authModal'>
      <form onSubmit={login} className='flex flex-col gap-6'>
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
        <Button
          type='submit'
          onClick={login}
          className='bg-brand-darkorange mt-5 rounded-md'
        >
          Login
        </Button>
        {errorMessage && <p className='error'> {errorMessage} </p>}
      </form>
    </div>
  );
};

export default LoginForm;
