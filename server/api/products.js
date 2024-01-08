import express, { query, response } from 'express';
import dotenv from 'dotenv';

import Product from '../models/product.js';
dotenv.config({ path: './.env' });

const router = express.Router();

const staffAlbums = [
  'The College Dropout',
  'Rodeo',
  'Late Registration',
  'Take Care',
  'Good Kid, M.A.A.d City',
  'I Never Liked You',
];

router.get('/recent', async (req, res) => {
  const response = await Product.find({ year: 2023 })
    .sort({ popularity: -1 })
    .limit(req.query.limit);
  res.send({ data: response, secret: process.env.SECRET_STRING });
});

router.get('/discount', async (req, res) => {
  const response = await Product.find({ price: { $lt: 10 } })
    .sort({ popularity: -1 })
    .limit(req.query.limit);
  res.send({ data: response, secret: process.env.SECRET_STRING });
});

router.get('/genre/:id', async (req, res) => {
  const reqGenre = req.params.id;
  const response = await Product.find({
    genre: reqGenre,
  }).limit(req.query.limit);
  res.send({ data: response, secret: process.env.SECRET_STRING });
});

router.get('/search', async (req, res) => {
  const searchQuery = req.query.q;
  const Query = new RegExp(searchQuery, 'i');

  const response = await Product.find({
    $or: [
      { title: { $regex: Query } },
      { artist: { $regex: Query } },
      { genre: { $regex: Query } },
    ],
  })
    .sort({ popularity: -1 })
    .limit(req.query.limit);

  res.send({ data: response, secret: process.env.SECRET_STRING });
});

router.get('/trending', async (req, res) => {
  const response = await Product.find({})
    .sort({ popularity: -1 })
    .limit(req.query.limit);

  res.send({ data: response, secret: process.env.SECRET_STRING });
});

router.get('/discover', async (req, res) => {
  const length = await Product.countDocuments();

  const response = await Product.aggregate([
    { $sample: { size: length } },
  ]).limit(50);

  res.send({ data: response, secret: process.env.SECRET_STRING });
});

router.get('/staff', async (req, res) => {
  const response = await Product.find({
    title: staffAlbums.map((e) => {
      return e;
    }),
  });
  res.send({ data: response, secret: process.env.SECRET_STRING });
});

export { router };
