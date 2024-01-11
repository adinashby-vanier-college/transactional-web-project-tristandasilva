import React from 'react';
import useQuery from '../../hooks/useQuery';
import AlbumItem from './AlbumItem';

const CategoryGrid = ({ title, categoryQuery }) => {
  const vinyls = useQuery(`/products/${categoryQuery}?limit=30`);
  return (
    <div>
      <h1 className='text-white text-xl font-medium text-center mb-7 tracking-[15px]'>
        {title.toUpperCase()}
      </h1>
      <div className='flex flex-wrap justify-evenly gap-10 md:gap-20 customScrollbar'>
        {vinyls &&
          vinyls.data.map((vinyl, index) => (
            <AlbumItem
              key={index}
              id={vinyl._id}
              name={vinyl.title}
              genre={vinyl.genre}
              artists={vinyl.artist}
              price={vinyl.price}
              imageUrl={vinyl.cover_image}
              secret={vinyls.secret}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
