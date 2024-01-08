import React, { Component, useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import '../index.css';
import CategoryList from '../components/category/CategoryList';
import starIcon from '../../public/star-icon.svg';
import flamesIcon from '../../public/flames-icon.svg';
import purpleHeart from '../../public/purpleheart-icon.svg';
import axios from 'axios';

const urls = [
  'http://localhost:5050/products/recent?limit=30',
  'http://localhost:5050/products/trending?limit=30',
  'http://localhost:5050/products/staff',
];

const HomeScreen = () => {
  return (
    <div className='h-full'>
      <Nav></Nav>
      <div className='w-11/12 h-fit m-auto py-16 bg-brand-darkgrey px-24 flex flex-col gap-y-20'>
        <CategoryList category={'Newly Added'} icon={starIcon} url={urls[0]} />
        <CategoryList
          category={'Weekly Trends'}
          icon={flamesIcon}
          url={urls[1]}
        />
        <CategoryList
          category={'Staff Picks'}
          icon={purpleHeart}
          url={urls[2]}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
