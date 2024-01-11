import mongoose, { Schema } from "mongoose";

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
});

export default mongoose.model("Cart", CartSchema);
