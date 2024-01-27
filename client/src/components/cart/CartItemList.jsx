/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function CartItemList({ data, setTotal }) {
  const removeNode = (i) => {
    document.getElementById(i).remove();
  };
  console.log(data);
  return (
    <div className="overflow-auto h-full no-scrollbar">
      {data &&
        data.data.products.map((e, i) => {
          return (
            <CartItem
              deleteNode={removeNode}
              key={i}
              title={e.product.title}
              artist={e.product.artist}
              img={e.product.cover_image}
              price={e.product.price}
              _id={e.product._id}
              qty={e.qty}
              secret={data.secret}
            />
          );
        })}
    </div>
  );
}

export default CartItemList;
