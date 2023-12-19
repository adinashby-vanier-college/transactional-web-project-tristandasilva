import mongoose, { Schema } from "mongoose";

const CartSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: {
    type: [{ product: String, qty: Number }],
  },
});

export default mongoose.model("Cart", CartSchema);
