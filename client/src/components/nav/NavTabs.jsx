import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavTabs = () => {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <div className='text-white px-40 py-[2px] flex sm:flex-col justify-between items-center bg-[#8CBEB270]'>
        <Link to='/genre'>Genre</Link>
        <Link to='/trending'>{t('navigation.trending')}</Link>
        <Link to='/recent'>{t('navigation.recent')}</Link>
        <Link to='/discount'>{t('navigation.lessThanTen')}</Link>
        <Link to='/discover'>{t('navigation.discover')}</Link>
      </div>
    </div>
  );
};

export default NavTabs;
