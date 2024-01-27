import { initializeApp } from "firebase/app";
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

const firebase = initializeApp(firebaseConfig);
export default firebase;
