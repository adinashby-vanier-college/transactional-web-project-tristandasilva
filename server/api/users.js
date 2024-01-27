import express from "express";
import User from "../models/user.js";
import verifyPassword from "../helpers/verifyPassword.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createCart from "../helpers/createCart.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../config/firebase.js";

dotenv.config({ path: "./.env" });

const router = express.Router();
const auth = getAuth(firebase);

router.get("/", async (req, res) => {
  const token = jwt.verify(req.headers.authorization, "shhhhh");
  try {
    const user = await User.findById(token.id);
    res.send(user);
  } catch (error) {
    res.send("No user found");
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token");
  res.clearCookie("user");
  res.status(200).end();
});

router.post("/register", async (req, res) => {
  try {
    createUserWithEmailAndPassword(
      auth,
      req.body.email,
      req.body.password
    ).then(async (userCred) => {
      var user = userCred.user;
      console.log(user);
    });
  } catch (err) {
    console.log("failed");

    err.code == 11000 // This code is for duplicate email
      ? res
          .status(401)
          .send({ message: "User already associated with this email." })
      : res.status(400).send({ message: "Registration unsuccessful" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    const token = jwt.sign({ id: user[0]._id }, "shhhhh");
    if (
      user &&
      (await verifyPassword(req.body.password, user[0].password, user[0].salt))
    ) {
      res.send({ token: token, user: user[0] });
    } else {
      res.status(401).send({
        message: "Incorrect password, try again.",
      });
    }
  } catch (err) {
    res.status(400).send({
      message: "No user assiocated with this email.",
    });
  }
});

export { router };
