import express from "express";
import Cart from "../models/cart.js";
import User from "../models/user.js";
import { getAuth, getIdToken } from "firebase/auth";
import dotenv from "dotenv";
import firebase from "../config/firebase.js";
import Product from "../models/product.js";

dotenv.config({ path: "./.env" });

const router = express.Router();
const auth = getAuth(firebase);

// Gets the users cart information
router.get("/", async (req, res) => {
  const user = JSON.parse(req.cookies.user);

  const cart = await Cart.findOne({ user: user._id }).populate(
    "products.product"
  );
  if (!cart.products.length) {
    return res.send({ data: { empty: true } });
  }
  res.send({ data: cart, secret: process.env.SECRET_STRING });
});

// Creates new cart if not there and adds objects takes in a array of products FORMAT(products: [{product, qty}])
router.post("/products", async (req, res) => {
  const prodId = req.body.products[0].product;
  const product = await Product.findOne({ _id: prodId });

  const user = JSON.parse(req.cookies.user);
  let cart = await Cart.findOneAndUpdate(
    { user: user._id },
    {
      $addToSet: { products: req.body.products },
      $inc: { total: parseFloat(product.price) },
    }
  );
  cart.save();
  res.send(cart);
});

// Removes a single items from the cart takes in a product id FORMAT({product})
router.delete("/products", async (req, res) => {
  const prodId = req.body.product;
  const product = await Product.findOne({ _id: prodId });

  const user = JSON.parse(req.cookies.user);

  try {
    const cart = await Cart.findOneAndUpdate(
      { user: user._id },
      {
        $pull: { products: { product: req.body.product } },
        $inc: { total: -parseFloat(product.price) },
      }
    );

    res.send(cart);
  } catch (err) {
    console.log(err);
  }
});

// Updates a single item from the cart takes product id and qty FORMAT({product,qty})
router.put("/products", async (req, res) => {
  const prodId = req.body.product;
  const product = await Product.findOne({ _id: prodId });
  const increment =
    req.query.filter == "dec"
      ? -parseFloat(product.price)
      : parseFloat(product.price);

  const user = JSON.parse(req.cookies.user);

  const cart = await Cart.findOneAndUpdate(
    { user: user._id, "products.product": req.body.product },
    { $set: { "products.$.qty": req.body.qty }, $inc: { total: increment } }
  );
  res.send(cart);
});

export { router };
