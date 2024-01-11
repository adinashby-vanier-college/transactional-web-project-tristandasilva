import React from 'react';
import Nav from '../components/nav/Nav';
import CategoryList from '../components/category/CategoryList';
import guitarIcon from '../assets/electric-guitar.png';
import popIcon from '../assets/spotlight.png';
import hipHopIcon from '../assets/hip-hop.png';
import electronicIcon from '../assets/robot.png';

const GenreScreen = () => {
  const urls = [
    '/products/genre/Rock?limit=30',
    '/products/genre/Pop?limit=30',
    '/products/genre/Electronic?limit=30',
    '/products/genre/Hip Hop?limit=30',
  ];

  return (
    <div className='h-full homescreen-bg'>
      <Nav></Nav>
      <div className='w-11/12 h-fit m-auto py-16 bg-brand-darkgrey px-24 flex flex-col gap-y-20'>
        <CategoryList
          category={'Hip Hop'}
          icon={hipHopIcon}
          iconWidth={'25px'}
          url={urls[3]}
        />
        <CategoryList
          category={'Rock'}
          icon={guitarIcon}
          iconWidth={'30px'}
          url={urls[0]}
        />
        <CategoryList
          category={'Electronic'}
          icon={electronicIcon}
          iconWidth={'30px'}
          url={urls[2]}
        />
        <CategoryList
          category={'Pop'}
          icon={popIcon}
          iconWidth={'25px'}
          url={urls[1]}
        />
      </div>
    </div>
  );
};

export default GenreScreen;
