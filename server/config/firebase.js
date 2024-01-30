import * as firebase from "firebase/app";
import "firebase/auth";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;

export default firebase;
