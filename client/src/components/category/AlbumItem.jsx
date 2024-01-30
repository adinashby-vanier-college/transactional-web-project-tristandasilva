import React, { Component, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "flowbite-react";
import axios from "../../api/axiosConfig";

const AlbumItem = (props) => {
  const [id, setId] = useState(props.id);
  async function addToCart() {
    try {
      await axios.post(
        "/cart/products",
        {
          products: [{ product: id, qty: 1 }],
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="albumItemBox">
      <div className="max-h-[200px] overflow-hidden">
        <img src={props.imageUrl + props.secret}></img>
      </div>
      <div className="h-2/5 w-full absolute bottom-5 bg-[#00000099] flex justify-between px-1.5 py-0.5">
        <div className="flex flex-col justify-between w-4/5">
          <div>
            <p className="text-white text-sm font-medium">
              {props.name.length > 40
                ? props.name.substring(0, 39) + "..."
                : props.name}
            </p>
            <p className="text-[#C5C5C5] text-xs font-semibold">
              {props.artists}
            </p>
          </div>
          <div className="text-[#ffffff99] text-xs font-semibold mb-2">
            {props.genre}
          </div>
        </div>
        <div className="flex flex-col justify-between mb-2 items-end">
          {<p className="text-white text-base">${props.price}</p>}
          <Button
            size="sm"
            color="warning"
            className="p-0 rounded bg-[#000000] hover:bg-[#020101]"
            onClick={addToCart}
          >
            <MdAddShoppingCart className="text-sm" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlbumItem;
