import Cart from "../models/cart.js";

async function createCart(user, product) {
  var cart;
  if (!product) {
    cart = new Cart({
      user: user._id,
    });
  } else {
    cart = new Cart({
      user: user._id,
      products: product,
    });
  }
  cart.save();
  return cart;
}

export default createCart;
