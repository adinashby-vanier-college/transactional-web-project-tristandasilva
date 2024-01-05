import React, { Component, useState } from 'react';
import AlbumItem from './AlbumItem';

const AlbumItemList = ({ vinyls }) => {
  return (
    <div className='flex flex-row gap-24 overflow-x-auto pb-5 customScrollbar'>
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
  );
};

export default AlbumItemList;
