/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

function CartItemList({ data }) {
  const removeNode = (i) => {
    document.getElementById(i).remove();
  };
  return (
    <div className="overflow-auto">
      {data &&
        data.products.map((e, i) => {
          return (
            <CartItem
              deleteNode={removeNode}
              key={i}
              title={e.product.title}
              artist={e.product.artist}
              img={e.product.img}
              price={e.product.price}
              _id={e.product._id}
              qty={e.qty}
            />
          );
        })}
    </div>
  );
}

export default CartItemList;
