/* eslint-disable no-undef */
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const router = express.Router();
const baseURL = 'https://api.discogs.com/';
const header = {
  'Content-Type': 'application/json',
  Authorization:
    'Discogs key=' +
    process.env.CUSTOMER_KEY +
    ', secret=' +
    process.env.CUSTOMER_SECERT,
};

router.get('/recent', async (req, res) => {
  const url = new URL(
    baseURL +
      'database/search?year=' +
      new Date().getFullYear() +
      '&per_page=20&type=master&format=album'
  );
  const response = await axios.get(url, {
    headers: header,
  });
  res.send(response.data);
});

router.get('/genre/:id', async (req, res) => {
  const url = new URL(
    baseURL +
      'database/search?genre=' +
      req.params.id +
      '&per_page=20&type=master&format=album'
  );
  const response = await axios.get(url, { headers: header });
  res.send(response.data);
});

router.get('/search/:q', async (req, res) => {
  const url = new URL(
    baseURL +
      'database/search?q=' +
      req.params.q +
      'type=master&format=album&per_page=20&'
  );
  const response = await axios.get(url, { headers: header });
  res.send(response.data);
});

router.get('/trending', async (req, res) => {
  const url = new URL(
    baseURL + "database/search?q=' 'type=master&format=album&per_page=100&"
  );
  const response = await axios.get(url, { headers: header });

  response.data.results.sort((a, b) => {
    return b.community.want - a.community.want;
  });

  res.send(response.data);
});

router.get('/:id', async (req, res) => {
  const url = new URL(baseURL + 'releases/' + req.params.id);

  try {
    const response = await axios.get(url, { headers: header });
    res.send(response.data);
  } catch (err) {
    res.send(err);
  }
});

export { router };
