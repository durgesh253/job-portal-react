// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDwV5pZ6rarzrYnN1bgMtsgYW5AXf6Exo",
  authDomain: "online-job-portal-648e7.firebaseapp.com",
  projectId: "online-job-portal-648e7",
  storageBucket: "online-job-portal-648e7.appspot.com",
  messagingSenderId: "915349677428",
  appId: "1:915349677428:web:5c11061d221c7b03c07821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};