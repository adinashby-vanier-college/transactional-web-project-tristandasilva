import express from 'express';
import Cart from '../models/cart.js';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import createCart from '../helpers/createCart.js';

const router = express.Router();

// Gets the users cart information
router.get('/', async (req, res) => {
  console.log(req.cookies.token);
  // const token = jwt.verify(req.cookies.token, 'shhhhh');
  // const cart = await Cart.findOne({ user: token.id });
  // res.send(cart);
});

// Creates new cart if not there and adds objects takes in a array of products FORMAT(products: [{product, qty}])
router.post('/products', async (req, res) => {
  const token = jwt.verify(req.headers.authorization, 'shhhhh');
  const user = await User.findById(token.id);
  let cart = await Cart.findOneAndUpdate(
    { user: user._id },
    { $addToSet: { products: req.body.products } }
  );
  if (!cart) {
    cart = await createCart(user, req.body.products);
  }
  cart.save();
  res.send(cart);
});

// Removes a single items from the cart takes in a product id FORMAT({product})
router.delete('/products', async (req, res) => {
  const token = jwt.verify(req.headers.authorization, 'shhhhh');
  const user = await User.findById(token.id);

  try {
    const cart = await Cart.findOneAndUpdate(
      { user: user._id },
      { $pull: { products: { product: req.body.product } } }
    );
    res.send(cart);
  } catch (err) {
    console.log(err);
  }
});

// Updates a single item from the cart takes product id and qty FORMAT({product,qty})
router.patch('/products', async (req, res) => {
  const token = jwt.verify(req.headers.authorization, 'shhhhh');
  const user = await User.findById(token.id);

  const cart = await Cart.findOneAndUpdate(
    { user: user._id, 'products.product': req.body.product },
    { $set: { 'products.$.qty': req.body.qty } }
  );
  res.send(cart);
});

export { router };
