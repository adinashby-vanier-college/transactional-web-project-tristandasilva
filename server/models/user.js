import mongoose from "mongoose";
import Cart from "./cart.js";

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  const cart = await Cart.create({
    user: user,
  });
  cart.products = [];
  cart.save();
});

export default mongoose.model("User", UserSchema);
