/* eslint-disable no-undef */
import express, { query, response } from "express";
import dotenv from "dotenv";

import Product from "../models/product.js";

dotenv.config({ path: "./.env" });

const router = express.Router();

const staffAlbums = [
  "The College Dropout",
  "Rodeo",
  "Late Registration",
  "Take Care",
  "Good Kid, M.A.A.d City",
  "I Never Liked You",
];

router.get("/recent", async (req, res) => {
  const response = await Product.find({ year: new Date().getFullYear() })
    .sort({ popularity: -1 })
    .limit(req.query.limit);

  res.send(response);
});

router.get("/genre/:id", async (req, res) => {
  const response = await Product.find({ genre: req.params.id }).limit(
    req.query.limit
  );
  res.send(response);
});

router.get("/search", async (req, res) => {
  const searchQuery = req.query.q;
  const Query = new RegExp(searchQuery, "i");

  const response = await Product.find({
    $or: [
      { title: { $regex: Query } },
      { artist: { $regex: Query } },
      { genre: { $regex: Query } },
    ],
  })
    .sort({ popularity: -1 })
    .limit(req.query.limit);

  res.send(response);
});

router.get("/trending", async (req, res) => {
  const response = await Product.find({})
    .sort({ popularity: -1 })
    .limit(req.query.limit);

  res.send(response);
});

router.get("/discover", async (req, res) => {
  const length = await Product.countDocuments();

  const response = await Product.aggregate([
    { $sample: { size: length } },
  ]).limit(1);

  res.send(response);
});

router.get("/staff", async (req, res) => {
  const response = await Product.find({
    title: staffAlbums.map((e) => {
      return e;
    }),
  });
  res.send(response);
});

export { router };
