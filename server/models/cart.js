import mongoose, { Schema } from "mongoose";

const CartSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: {
    type: [
      { product: { type: Schema.Types.ObjectId, ref: "Product" }, qty: Number },
    ],
  },
});

export default mongoose.model("Cart", CartSchema);
