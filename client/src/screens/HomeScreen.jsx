/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import Nav from '../components/Nav';
import '../index.css';
import CategoryList from '../components/CategoryList';
import starIcon from '../../public/star-icon.svg';
import flamesIcon from '../../public/flames-icon.svg';
import purpleHeart from '../../public/purpleheart-icon.svg';
import vinylList from '../vinyls.json';

const HomeScreen = () => {
  const [vinyls, setVinyls] = useState(vinylList);
  return (
    <div className='h-full homescreen-bg'>
      <Nav></Nav>
      {/* Content Container */}
      <div className='w-11/12 m-auto pt-16 h-full bg-brand-darkgrey px-12 flex flex-col gap-y-10'>
        <CategoryList
          category={'Newly Added'}
          icon={starIcon}
          vinyls={vinylList}
        />
        <CategoryList
          category={'Weekly Trends'}
          icon={flamesIcon}
          vinyls={vinylList}
        />
        <CategoryList
          category={'Staff Picks'}
          icon={purpleHeart}
          vinyls={vinylList}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
