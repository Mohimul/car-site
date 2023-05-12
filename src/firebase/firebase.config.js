// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyspJF38f7R1K1KXyA3v28AihNgjtMpjg",
  authDomain: "cars-f49a6.firebaseapp.com",
  projectId: "cars-f49a6",
  storageBucket: "cars-f49a6.appspot.com",
  messagingSenderId: "261511829150",
  appId: "1:261511829150:web:cea2bed6b6fa71180e0d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app