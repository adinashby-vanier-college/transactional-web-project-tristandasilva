import Cart from "../models/cart.js";

async function createCart(user, product) {
  const cart = new Cart({
    user: user._id,
    products: product,
  });
  return cart;
}

export default createCart;
