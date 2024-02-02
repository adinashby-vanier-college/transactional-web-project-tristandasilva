import mongoose, { Schema } from "mongoose";
import Product from "./product.js";

const CartSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: {
    type: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        qty: Number,
      },
    ],
    default: [],
  },
  total: { type: Number, default: 0 },
});

export default mongoose.model("Cart", CartSchema);
