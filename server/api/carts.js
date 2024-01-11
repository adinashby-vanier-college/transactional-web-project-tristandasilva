import express from "express";
import Cart from "../models/cart.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import createCart from "../helpers/createCart.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const router = express.Router();

// Gets the users cart information
router.get("/", async (req, res) => {
  const token = jwt.verify(req.cookies.token, "shhhhh");
  
  const cart = await Cart.findOne({ user: token._id }).populate(
    "products.product"
  );
  if (!cart.products.length) {
    return res.send({ data: { empty: true } });
  }
  res.send({ data: cart, secret: process.env.SECRET_STRING });
});

// Creates new cart if not there and adds objects takes in a array of products FORMAT(products: [{product, qty}])
router.post("/products", async (req, res) => {
  const token = jwt.verify(req.cookies.token, "shhhhh");
  let cart = await Cart.findOneAndUpdate(
    { user: token._id },
    { $addToSet: { products: req.body.products } }
  );
  if (!cart) {
    cart = await createCart(token.id, req.body.products);
  }
  res.send(cart);
});

// Removes a single items from the cart takes in a product id FORMAT({product})
router.delete("/products", async (req, res) => {
  const token = jwt.verify(req.cookies.token, "shhhhh");

  try {
    const cart = await Cart.findOneAndUpdate(
      { user: token._id },
      { $pull: { products: { product: req.body.product } } }
    );
    res.send(cart);
  } catch (err) {
    console.log(err);
  }
});

// Updates a single item from the cart takes product id and qty FORMAT({product,qty})
router.put("/products", async (req, res) => {
  const token = jwt.verify(req.cookies.token, "shhhhh");

  const cart = await Cart.findOneAndUpdate(
    { user: token._id, "products.product": req.body.product },
    { $set: { "products.$.qty": req.body.qty } }
  );
  res.send(cart);
});

export { router };
