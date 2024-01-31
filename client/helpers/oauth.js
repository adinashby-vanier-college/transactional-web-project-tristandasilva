import * as firebase from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import firebaseConfig from "../src/api/firebaseConfig";
import axios from "../src/api/axiosConfig";
import setCookies from "./setCookies";

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export function googleLogin() {
  signInWithPopup(auth, new GoogleAuthProvider()).then(async (userCred) => {
    await axios
      .post("/users/login/oauth", {
        token: userCred.accessToken,
        username: userCred.user.displayName,
        email: userCred.user.email,
      })
      .then((res) => {
        if (res.status == 200) {
          setCookies(res.data);
          location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status >= 400) {
          setErrorMessage(err.response.data.message);
        } else {
          alert(err);
        }
      });
  });
}
export function facebookLogin() {
  signInWithPopup(auth, new FacebookAuthProvider()).then(async (userCred) => {
    console.log(userCred);
    await axios
      .post("/users/login/oauth", {
        token: userCred.accessToken,
        username: userCred.user.displayName,
        email: userCred.user.email,
      })
      .then((res) => {
        if (res.status == 200) {
          setCookies(res.data);
          location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status >= 400) {
          setErrorMessage(err.response.data.message);
        } else {
          alert(err);
        }
      });
  });
}
