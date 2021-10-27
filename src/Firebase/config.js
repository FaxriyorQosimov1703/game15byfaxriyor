
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDj5O0Q22JRI2xS8tjOXmSwzLzTKjhG6IM",
    authDomain: "woodliders.firebaseapp.com",
    projectId: "woodliders",
    storageBucket: "woodliders.appspot.com",
    messagingSenderId: "93886575100",
    appId: "1:93886575100:web:78838754781f1c6f9bc279",
    measurementId: "G-W542VJLWQT"
  };


  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);