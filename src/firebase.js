// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwIuNBLt08loy_eSntKMsBHpIAGZBRqLA",
  authDomain: "registration-form-reactj-71f6d.firebaseapp.com",
  databaseURL: "https://registration-form-reactj-71f6d-default-rtdb.firebaseio.com",
  projectId: "registration-form-reactj-71f6d",
  storageBucket: "registration-form-reactj-71f6d.appspot.com",
  messagingSenderId: "483640092377",
  appId: "1:483640092377:web:af70572a657e83de4100c8",
  measurementId: "G-L3KE6GP766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
