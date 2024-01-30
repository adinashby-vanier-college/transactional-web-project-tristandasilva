import express from "express";
import User from "../models/user.js";
import dotenv from "dotenv";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import firebase from "../config/firebase.js";

dotenv.config({ path: "./.env" });

const router = express.Router();
const auth = getAuth(firebase);

var user;

app.use((req, res, next) => {
  user = firebase.auth().currentUser;
  res.locals.currentUser = user;
  next();
});

router.get("/", async (req, res) => {
  const userEmail = auth.currentUser.email;
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
        user = userCred.user;
        const newUser = await User.create({
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
      user = userCred.user;
      const newUser = await User.findOne({ email: userCred.user.email });
      const accessToken = userCred.user.stsTokenManager.accessToken;
      res.send({ token: accessToken, user: user });
    });
  } catch (err) {
    res.status(400).send({
      message: "No user assiocated with this email.",
    });
  }
});

router.post("/login/google", async (req, res) => {});
router.post("/login/facebook", async (req, res) => {});

export { router };
