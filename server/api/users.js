import express from 'express';
import User from '../models/user.js';
import verifyPassword from '../helpers/verifyPassword.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const router = express.Router();

router.get('/', async (req, res) => {
  const token = jwt.verify(req.headers.authorization, 'shhhhh');
  try {
    const user = await User.findById(token.id);
    res.send(user);
  } catch (error) {
    res.send('No user found');
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie('token');
  res.clearCookie('user');
  res.status(200).end();
});

router.post('/register', async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    const token = jwt.sign(JSON.stringify(newUser), 'shhhhh');
    res.send({ token: token, user: newUser });
  } catch (err) {
    err.code == 11000 // This code is for duplicate email
      ? res
          .status(401)
          .send({ message: 'User already associated with this email.' })
      : res.status(400).send({ message: 'Registration unsuccessful' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    const token = jwt.sign({ id: user[0]._id }, 'shhhhh');
    if (
      user &&
      (await verifyPassword(req.body.password, user[0].password, user[0].salt))
    ) {
      res.send({ token: token, user: user[0] });
    } else {
      res.status(401).send({
        message: 'Incorrect password, try again.',
      });
    }
  } catch (err) {
    res.status(400).send({
      message: 'No user assiocated with this email.',
    });
  }
});

export { router };
