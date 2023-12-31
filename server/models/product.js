import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
  master_id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
    required: true,
  },
  artist: {
    type: String,
  },
  genre: { type: [String] },
  price: {
    type: String,
  },
  year: {
    type: Number,
  },
  popularity: { type: Number },
  cover_image: {
    type: String,
  },
});

export default mongoose.model("Product", ProductSchema);
