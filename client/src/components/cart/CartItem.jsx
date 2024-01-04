import { useState } from "react";
import { Button } from "flowbite-react";
import axios from "axios";

/* eslint-disable react/prop-types */
function CartItem({ title, img, artist, price, qty, _id, deleteNode, secret }) {
  const [quantity, setQty] = useState(qty);
  const [id, setId] = useState(_id);

  async function deleteItem() {
    await axios.delete("http://localhost:5050/cart/products", {
      withCredentials: true,
      data: { product: id },
    });
  }
  return (
    <div className="flex m-5 text-white" id={_id}>
      <img className="aspect-square h-28 p-1" src={img + secret}></img>
      <div className="flex justify-between w-full py-3 p-1">
        <div className="flex flex-col">
          <p>{title}</p>
          <p className="text-neutral-500">{artist}</p>
          <Button.Group>
            <Button
              className="bg-neutral-900 hover:bg-neutral-700 transition-all"
              color="fff"
              onClick={() => {
                setQty(quantity - 1);
              }}
            >
              -
            </Button>
            <p className="aspect-square h-full flex items-center justify-center">
              {quantity}
            </p>
            <Button
              color="fff"
              className="bg-neutral-900 hover:bg-neutral-700 transition-all"
              onClick={() => {
                setQty(quantity + 1);
              }}
            >
              +
            </Button>
          </Button.Group>
        </div>
        <div className="flex flex-col items-end">
          <p>${price}</p>
          <button
            className="my-3 aspect-square h-5"
            onClick={() => {
              deleteNode(_id);
              deleteItem();
            }}
          >
            <img src="/public/exit.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
