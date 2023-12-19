import express from "express";
import { router as UserRouter } from "./api/users.js";
import { router as ProductRouter } from "./api/products.js";
import { router as CartRouter } from "./api/carts.js";

import db from "./config/db.js";

db();

const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);
//app.use("/wishlist")

app.listen(5050);
console.log("http://127.0.0.1:5050/");
