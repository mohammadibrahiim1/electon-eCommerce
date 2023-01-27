// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIotkZB_vAI44fh_rS7pfxi6zZOHYAVPw",
  authDomain: "electon-ecommerce.firebaseapp.com",
  projectId: "electon-ecommerce",
  storageBucket: "electon-ecommerce.appspot.com",
  messagingSenderId: "162036111649",
  appId: "1:162036111649:web:4d064c72cda9cdfdf8c660",
  measurementId: "G-1JK9BB4D6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app