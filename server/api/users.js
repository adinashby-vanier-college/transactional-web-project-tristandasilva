import express from "express";
import User from "../models/user.js";
import dotenv from "dotenv";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebase from "../config/firebase.js";

dotenv.config({ path: "./.env" });

const router = express.Router();
const auth = getAuth(firebase);

router.get("/", async (req, res) => {
  const userEmail = auth.currentUser.email;
  console.log(userEmail);
  try {
    const user = await User.find({ email: userEmail });
    res.send(user);
  } catch (error) {
    res.send("No user found");
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token");
  res.clearCookie("user");
  signOut(auth);
});

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCred) => {
        const user = await User.create({
          first_name: first_name,
          last_name: last_name,
          email: email,
        });
        user.save();
      }
    );
  } catch (err) {
    err.code == 11000 // This code is for duplicate email
      ? res
          .status(401)
          .send({ message: "User already associated with this email." })
      : res.status(400).send({ message: "Registration unsuccessful" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    signInWithEmailAndPassword(auth, email, password).then(async (userCred) => {
      const user = await User.findOne({ email: userCred.user.email });
      const accessToken = userCred.user.stsTokenManager.accessToken;
      res.send({ token: accessToken, user: user });
    });
  } catch (err) {
    res.status(400).send({
      message: "No user assiocated with this email.",
    });
  }
});

export { router };
