import React from 'react';
import Nav from '../components/nav/Nav';
import CategoryList from '../components/category/CategoryList';
import starIcon from '../../public/star-icon.svg';

const GenreScreen = () => {
  const urls = [
    'http://localhost:5050/products/genre/Rock?limit=30',
    'http://localhost:5050/products/genre/Pop?limit=30',
    'http://localhost:5050/products/genre/Electronic?limit=30',
    'http://localhost:5050/products/genre/Hip Hop?limit=30',
  ];

  return (
    <div className='h-full homescreen-bg'>
      <Nav></Nav>
      <div className='w-11/12 h-fit m-auto py-16 bg-brand-darkgrey px-24 flex flex-col gap-y-20'>
        <CategoryList category={'Rock'} icon={starIcon} url={urls[0]} />
        <CategoryList category={'Pop'} icon={starIcon} url={urls[1]} />
        <CategoryList category={'Electronic'} icon={starIcon} url={urls[2]} />
        <CategoryList category={'Hip Hop'} icon={starIcon} url={urls[3]} />
      </div>
    </div>
  );
};

export default GenreScreen;
