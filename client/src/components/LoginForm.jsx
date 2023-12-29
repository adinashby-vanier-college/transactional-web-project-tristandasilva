/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5050/users/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          alert('Email or password is incorrect');
        } else {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <form onSubmit={login}>
      <div>
        <label>Email</label>
        <input
          type='email'
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type='submit' onClick={login}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
