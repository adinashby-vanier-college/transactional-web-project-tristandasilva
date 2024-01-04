/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import AlbumItemList from "./AlbumItemList";
import useQuery from "../../hooks/useQuery";

const CategoryList = ({ category, icon, url }) => {
  const vinyls = useQuery(url);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-3 items-center">
        <img src={icon} width={"20px"}></img>
        <h2 className="text-white text-xl font-medium">{category}</h2>
      </div>
      <AlbumItemList vinyls={vinyls} />
    </div>
  );
};

export default CategoryList;
