/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

const AlbumItem = (props) => {
  return (
    <div className='albumItemBox'>
      {/* Overlay for vinyl info */}
      {/* <div className='absolute h-full w-full bg-black/70 flex text-white'>
        <div className='flex flex-col gap-4'>
          <div>
            <h3>{props.name}</h3>
            <p className='text-[#C5C5C5]'>{props.artists[0]}</p>
          </div>
          <div>
            <p>{props.genre}</p>
          </div>
        </div>
      </div> */}
      <img src={props.imageUrl}></img>
    </div>
  );
};

export default AlbumItem;
