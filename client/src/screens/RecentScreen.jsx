import React from 'react';
import Nav from '../components/nav/Nav';
import CategoryGrid from '../components/category/CategoryGrid';
import { useTranslation } from 'react-i18next';

const RecentScreen = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className='h-full'>
      <Nav />
      <div className='w-11/12 h-fit m-auto px-24 py-16 bg-brand-darkgrey'>
        <CategoryGrid title={t('navigation.recent')} categoryQuery={'recent'} />
      </div>
    </div>
  );
};

export default RecentScreen;
