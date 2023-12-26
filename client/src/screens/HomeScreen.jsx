/* eslint-disable no-unused-vars */
import React, { Component, useState, useEffect } from 'react';
import Nav from '../components/Nav';
import '../index.css';
import CategoryList from '../components/CategoryList';
import starIcon from '../../public/star-icon.svg';
import flamesIcon from '../../public/flames-icon.svg';
import purpleHeart from '../../public/purpleheart-icon.svg';
import vinylList from '../vinyls.json';
import axios from 'axios';

const HomeScreen = () => {
  const [recentVinyls, setRecentVinyls] = useState([]);
  const [trendingVinyls, setTrendingVinyls] = useState([]);

  // Get Recent Vinyls
  useEffect(() => {
    axios
      .get('http://localhost:5050/products/recent')
      .then((res) => {
        setRecentVinyls(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('http://localhost:5050/products/trending')
      .then((res) => {
        setTrendingVinyls(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='h-full homescreen-bg'>
      <Nav></Nav>
      <div className='w-11/12 m-auto py-16 h-full bg-brand-darkgrey px-24 flex flex-col gap-y-20'>
        <CategoryList
          category={'Newly Added'}
          icon={starIcon}
          vinyls={recentVinyls}
        />
        <CategoryList
          category={'Weekly Trends'}
          icon={flamesIcon}
          vinyls={trendingVinyls}
        />
        {/* <CategoryList
          category={'Staff Picks'}
          icon={purpleHeart}
          vinyls={trendingVinyls}
        /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
