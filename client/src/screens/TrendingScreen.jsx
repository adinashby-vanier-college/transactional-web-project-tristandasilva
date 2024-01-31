import React from 'react';
import Nav from '../components/nav/Nav';
import CategoryList from '../components/category/CategoryList';
import useQuery from '../hooks/useQuery';
import AlbumItem from '../components/category/AlbumItem';
import CategoryGrid from '../components/category/CategoryGrid';
import { useTranslation } from 'react-i18next';

const TrendingScreen = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className='h-full'>
      <Nav />
      <div className='w-11/12 h-fit m-auto px-24 py-16 bg-brand-darkgrey'>
        <CategoryGrid
          title={t('navigation.trending')}
          categoryQuery={'trending'}
        />
      </div>
    </div>
  );
};

export default TrendingScreen;
