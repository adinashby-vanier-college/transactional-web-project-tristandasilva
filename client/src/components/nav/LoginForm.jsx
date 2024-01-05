import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const envMode = 'development';

  const login = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5050/users/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res);
          Cookies.set('token', res.data.token, {
            secure: envMode === 'production',
          });
          Cookies.set('user', JSON.stringify(res.data.user), {
            secure: envMode === 'production',
          });
          location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status >= 400) {
          setErrorMessage(err.response.data.message);
        } else {
          alert(err);
        }
      });
  };
  return (
    <form
      className='text-white'
      onSubmit={login}
      // onSubmit={async (e) => {
      //   e.preventDefault();
      //   await loginForm().then(() => {
      //     location.reload();
      //   });
      // }}
    >
      <div className='mb-3'>
        <label className='font-thin'>Email</label>
        <input
          type='email'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='font-thin'>Password</label>
        <input
          type='password'
          className=' bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={'/register'}>
          <p className='my-2 text-sm'>Forgot Password?</p>
        </Link>
      </div>
      <div className='text-xs error'>{errorMessage}</div>
      <div className='flex items-center gap-5 mt-5'>
        <Link to={'/register'}>
          <p className='whitespace-nowrap underline underline-offset-4'>
            Register Here
          </p>
        </Link>
        <input
          className='bg-yellow-500 px-3 p-2 rounded-lg w-full cursor-pointer'
          type='submit'
          value={'Login'}
        />
      </div>
    </form>
  );
};

export default LoginForm;
