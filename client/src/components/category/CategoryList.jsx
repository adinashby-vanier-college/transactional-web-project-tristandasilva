import React from 'react';
import AlbumItemList from './AlbumItemList';
import useQuery from '../../hooks/useQuery';

const CategoryList = ({ category, icon, iconWidth, url }) => {
  const vinyls = useQuery(url);
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex gap-3 items-center'>
        <img src={icon} width={iconWidth}></img>
        <h2 className='text-white text-xl font-medium'>{category}</h2>
      </div>
      <AlbumItemList vinyls={vinyls} />
    </div>
  );
};

export default CategoryList;
