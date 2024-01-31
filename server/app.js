import express, { response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import Stripe from "stripe";
import { isInProdMode } from "../client/baseUrl.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

import { router as UserRouter } from "./api/users.js";
import { router as ProductRouter } from "./api/products.js";
import { router as CartRouter } from "./api/carts.js";

import Cart from "./models/cart.js";
import db from "./config/db.js";

db();
var stripe = Stripe(process.env.STRIPE_API);

const app = express();
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/dist");
const corsOrigin = isInProdMode()
  ? "http://35.182.209.67/"
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

app.post("/checkout", async (req, res) => {
  const user = JSON.parse(req.cookies.user);
  const cart = await Cart.findOne({ user: user._id }).populate(
    "products.product"
  );

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: Math.round(cart.total * 100),
          product_data: {
            name: "VinylVault",
            description: "Purchase Vinyls",
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${corsOrigin}?success=true`,
    cancel_url: `${corsOrigin}?canceled=true`,
  });
  res.redirect(303, session.url);
});

app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);

app.listen(process.env.PORT);
console.log(path.join(_dirname, "../client/dist/index.html"));
