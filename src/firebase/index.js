// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMRG8rCvGPuEnkEIsuWRxO3x76_hPCo2k",
  authDomain: "fir-reactupload-eacc5.firebaseapp.com",
  projectId: "fir-reactupload-eacc5",
  storageBucket: "fir-reactupload-eacc5.appspot.com",
  messagingSenderId: "565358266196",
  appId: "1:565358266196:web:46b592e5454b1288076ac1",
  measurementId: "G-S089QQL596"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const storage = getStorage(firebase);
export {storage, firebase as default}