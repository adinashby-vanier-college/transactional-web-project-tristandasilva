import express from 'express';
import User from '../models/user.js';
import verifyPassword from '../helpers/verifyPassword.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.cookies.token);
  const token = jwt.verify(req.cookies.token, 'shhhhh');
  try {
    const user = await User.findById(token.id);
    res.send(user);
  } catch (error) {
    res.send('No user found');
  }
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
    res.cookie('token', token, { httpOnly: true }).send(token);
  } catch (err) {
    res.send('Unable to create user: ' + err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    console.log(user);
    const token = jwt.sign({ id: user[0]._id }, 'shhhhh');
    if (
      user &&
      (await verifyPassword(req.body.password, user[0].password, user[0].salt))
    ) {
      res.cookie('token', token, { httpOnly: true }).send(token);
    } else {
      res.status(401).send({
        message: 'Email or password is incorrect',
      });
    }
  } catch (err) {
    res.send(err);
  }
});

export { router };
