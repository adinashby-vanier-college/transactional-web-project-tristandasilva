import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsfcEw6NvKq1vdkPNOA2TVoYA3BKT36Wg",
  authDomain: "vinylvault-92077.firebaseapp.com",
  projectId: "vinylvault-92077",
  storageBucket: "vinylvault-92077.appspot.com",
  messagingSenderId: "178191059183",
  appId: "1:178191059183:web:36d29926dde039e101731a",
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
