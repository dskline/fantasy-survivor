import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD4GfBThmiw7Ay-es5gT_Sj6CSM0xpqJiY",
  authDomain: "fantasy-survivor-1d4ea.firebaseapp.com",
  projectId: "fantasy-survivor-1d4ea",
  storageBucket: "fantasy-survivor-1d4ea.appspot.com",
  messagingSenderId: "589291328035",
  appId: "1:589291328035:web:6bfbf424be755abe0e1796",
  measurementId: "G-LRJDFGZ1D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = typeof window !== "undefined" && getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = typeof window !== "undefined" && getMessaging(app);
