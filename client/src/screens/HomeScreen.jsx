/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Nav from '../components/Nav';
import '../index.css';

const HomeScreen = () => {
  return (
    <div className='h-screen homescreen-bg overflow-hidden'>
      <Nav></Nav>
      <div className='w-11/12 m-auto h-full bg-brand-darkgrey'></div>
    </div>
  );
};

export default HomeScreen;
