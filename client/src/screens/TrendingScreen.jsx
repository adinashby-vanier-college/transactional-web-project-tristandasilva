import React from 'react';
import Nav from '../components/nav/Nav';
import CategoryList from '../components/category/CategoryList';
import useQuery from '../hooks/useQuery';
import AlbumItem from '../components/category/AlbumItem';
import CategoryGrid from '../components/category/CategoryGrid';

const TrendingScreen = () => {
  return (
    <div className='h-full'>
      <Nav />
      <div className='w-11/12 h-fit m-auto px-24 py-16 bg-brand-darkgrey'>
        <CategoryGrid title={'Trending'} categoryQuery={'trending'} />
      </div>
    </div>
  );
};

export default TrendingScreen;
