/* eslint-disable react/prop-types */
import { useState } from "react";
import useQuery from "../../hooks/useQuery";
import CartItemList from "./CartItemList";

function CartList(props) {
  const response = useQuery("http://localhost:5050/cart/");
  const [total, setTotal] = useState(0);
  return (
    <div className=" bg-neutral-800 text-white h-screen fixed w-1/4 right-0 z-50 flex flex-col animate-slide-r  lg:w-full">
      <div className="flex justify-between items-center border-b-2 p-5">
        <div className="flex  text-2xl items-center">
          Cart&nbsp;<img src="/public/tag.svg"></img>
        </div>
        <button
          className="aspect-square h-10 cursor-pointer"
          onClick={() => {
            props.onClick(false);
          }}
        >
          <img src="/public/minus.svg"></img>
        </button>
      </div>
      {response && response.data.empty ? (
        <div className="flex items-center justify-center h-full ">
          Cart is Empty
        </div>
      ) : (
        <CartItemList data={response} total={total} setTotal={setTotal} />
      )}
      <div className="flex items-center justify-between border-t-2 p-5">
        <p className=" text-2xl">Total: $ {parseFloat(total).toFixed(2)}</p>
        <button className="bg-yellow-500 rounded-lg p-2 px-10 text-xl">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartList;
