/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import AlbumItem from "./AlbumItem";

const AlbumItemList = ({ vinyls }) => {
  return (
    <div className="flex flex-row gap-24 overflow-x-auto pb-5 customScrollbar">
      {vinyls &&
        vinyls.map((vinyl, index) => (
          <AlbumItem
            key={index}
            name={vinyl.title}
            genre={vinyl.genre}
            artists={vinyl.artist}
            price={vinyl.price}
            imageUrl={vinyl.cover_image}
          />
        ))}
    </div>
  );
};

export default AlbumItemList;
