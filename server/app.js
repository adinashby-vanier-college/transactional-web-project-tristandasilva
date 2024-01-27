import express, { response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
<<<<<<< HEAD
import Stripe from "stripe";
import { isInProdMode } from "../client/baseUrl.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./.env" });

import { router as UserRouter } from "./api/users.js";
import { router as ProductRouter } from "./api/products.js";
import { router as CartRouter } from "./api/carts.js";

import Cart from "./models/cart.js";
import db from "./config/db.js";

db();

const app = express();
const stripe = new Stripe(process.env.STRIPE_API);
=======
import { isInProdMode } from "../client/baseUrl.js";

import { router as UserRouter } from "./api/users.js";
import { router as ProductRouter } from "./api/products.js";
import { router as CartRouter } from "./api/carts.js";

import firebase from "./config/firebase.js";

const app = express();
>>>>>>> 0eb31d68525138b25f21c4b6e114679f17a5fe89
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/dist");
const corsOrigin = isInProdMode()
  ? "http://99.79.60.159:5050"
  : "http://localhost:5173";

process.on("uncaughtException", function (error) {
  console.log(error.stack);
});

app.use(express.static(buildPath));

app.use(express.json());
app.use(cors({ credentials: true, origin: corsOrigin }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../client/dist/index.html"), (err) => {
    if (err) res.status(500).send(err);
  });
});

<<<<<<< HEAD
app.use("/checkout", async (req, res) => {
  const token = jwt.verify(req.cookies.token, "shhhhh");
  const cart = await Cart.find({ user: token._id }).populate(
    "products.product"
  );
  const items = [];
  cart.products.forEach((e) => {
    items.push({
      price_data: {
        currency: "usd",
        unit_amount: e.product.price,
        product_data: {
          name: e.product.title,
          description: e.product.artist,
          images: [e.product.cover_image],
        },
      },
      quantity: e.qty,
    });
  });
  console.log(items);
  const session = stripe.checkout.sessions.create({
    line_items: items,
    mode: "payment",
    success_url: `${corsOrigin}?success=true`,
    cancel_url: `${corsOrigin}?canceled=true`,
  });
  res.redirect(303, session.url);
});

=======
>>>>>>> 0eb31d68525138b25f21c4b6e114679f17a5fe89
app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);

app.listen(process.env.PORT);
console.log(path.join(_dirname, "../client/dist/index.html"));
