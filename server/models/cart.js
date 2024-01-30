import mongoose, { Schema } from "mongoose";
import Product from "./product.js";

const CartSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", unique: true },
  products: {
    type: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", unique: true },
        qty: Number,
      },
    ],
  },
  total: { type: Number, default: 0 },
});

export default mongoose.model("Cart", CartSchema);
