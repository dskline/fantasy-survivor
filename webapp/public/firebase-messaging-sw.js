importScripts(
  "https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD4GfBThmiw7Ay-es5gT_Sj6CSM0xpqJiY",
  authDomain: "fantasy-survivor-1d4ea.firebaseapp.com",
  projectId: "fantasy-survivor-1d4ea",
  storageBucket: "fantasy-survivor-1d4ea.appspot.com",
  messagingSenderId: "589291328035",
  appId: "1:589291328035:web:6bfbf424be755abe0e1796",
  measurementId: "G-LRJDFGZ1D7",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
