/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import AlbumItem from './AlbumItem';

const AlbumItemList = ({ vinyls }) => {
  return (
    <div className='flex flex-row gap-24 overflow-x-auto'>
      {vinyls.map((vinyl, index) => (
        <AlbumItem
          key={index}
          name={vinyl.name}
          genre={vinyl.genre}
          artists={vinyl.artists}
          price={vinyl.price}
          imageUrl={vinyl.imageUrl}
        />
      ))}
    </div>
  );
};

export default AlbumItemList;
