/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Button } from 'flowbite-react';

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
      <div className='h-2/5 w-full absolute bottom-5 bg-[#00000099] flex justify-between px-1.5 py-0.5'>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='text-white text-lg font-medium'>{props.name}</p>
            <p className='text-[#C5C5C5] text-xs font-semibold'>
              {props.artists[0]}
            </p>
          </div>
          <div className='text-[#ffffff99] text-xs font-semibold mb-2'>
            {props.genre}
          </div>
        </div>
        <div className='flex flex-col justify-between mb-2 items-end'>
          <p className='text-white text-base'>${props.price}</p>
          <Button
            size='sm'
            color='warning'
            className='p-0 rounded bg-[#000000] hover:bg-[#020101]'
          >
            <MdAddShoppingCart className='text-sm' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
