import React, { useState } from 'react';
import axios from 'axios';
import setCookies from '../../../helpers/setCookies';

const LoginForm = ({ change }) => {
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
          console.log(res);
          setCookies(res.data);
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
    <form className='text-white' onSubmit={login}>
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
        <p className='my-2 text-sm'>Forgot Password?</p>
      </div>
      {errorMessage && <p className='text-xs error'>{errorMessage}</p>}
      <div className='flex items-center gap-5 mt-5'>
        <p
          className='whitespace-nowrap underline underline-offset-4 cursor-pointer'
          onClick={(e) => {
            localStorage.setItem('registerView', true);
            change();
            // window.dispatchEvent(new Event('storage'));
          }}
        >
          Register Here
        </p>
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
