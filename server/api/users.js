import express from "express";
import User from "../models/user.js";
import verifyPassword from "../helpers/verifyPassword.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", async (req, res) => {
  const token = jwt.verify(req.headers.authorization, "shhhhh");
  try {
    const user = await User.findById(token.id);
    res.send(user);
  } catch (error) {
    res.send("No user found");
  }
});

router.post("/register", async (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const newUser = await user.save();
    const token = jwt.sign(newUser._id, "shhhhh");
    res.send(token);
  } catch {
    res.send("Cannot create user");
  }
});

router.post("/login", async (req, res) => {
  const user = await User.find({ email: req.body.email });

  const token = jwt.sign({ id: user[0]._id }, "shhhhh");

  if (
    user &&
    (await verifyPassword(req.body.password, user[0].password, user[0].salt))
  ) {
    return res.send(token);
  }
  res.send("Password or email doesn't match");
});

export { router };
