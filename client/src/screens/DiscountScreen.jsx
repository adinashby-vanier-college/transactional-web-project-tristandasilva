import React from 'react';
import CategoryGrid from '../components/category/CategoryGrid';
import Nav from '../components/nav/Nav';

const DiscountScreen = () => {
  return (
    <div className='h-full'>
      <Nav />
      <div className='w-11/12 h-fit m-auto px-24 py-16 bg-brand-darkgrey'>
        <CategoryGrid title={'Less Than Ten'} categoryQuery={'discount'} />
      </div>
    </div>
  );
};

export default DiscountScreen;
