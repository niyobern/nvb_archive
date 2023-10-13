import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAyN46qoTztLCqbsKsDkyV-Orgt4bqESII",
    authDomain: "core-crossing-380101.firebaseapp.com",
    projectId: "core-crossing-380101",
    storageBucket: "core-crossing-380101.appspot.com",
    messagingSenderId: "931429132615",
    appId: "1:931429132615:web:1c6a0d341007c027a68462",
    measurementId: "G-6X7KYTK3R5"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);