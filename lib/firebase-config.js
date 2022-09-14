// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe3uBDgczMzZmJ-2vd6UiPVIiqLD39J1w",
  authDomain: "twitter-auth-9a51f.firebaseapp.com",
  projectId: "twitter-auth-9a51f",
  storageBucket: "twitter-auth-9a51f.appspot.com",
  messagingSenderId: "1064319543145",
  appId: "1:1064319543145:web:451014e9dd59a4be50bff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);