import React, { useState } from 'react';
import { Button } from 'flowbite-react';
const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confimedPass, setConfirmedPass] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className='authModal'>
      <form className='flex flex-col gap-6'>
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
            type='text'
            placeholder='Confirmed pass'
            value={confimedPass}
            onChange={(e) => setConfirmedPass(e.target.value)}
          />
        </div>
        <Button type='submit' className='bg-brand-darkorange mt-5 rounded-md'>
          Register
        </Button>
        {/* {errorMessage && <p className='error'> {errorMessage} </p>} */}
      </form>
    </div>
  );
};

export default RegisterForm;
