import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBK8yzflv4SZkFxplf7PRlmO22rFoIdZbI",
    authDomain: "quiz-app-ecfc7.firebaseapp.com",
    projectId: "quiz-app-ecfc7",
    storageBucket: "quiz-app-ecfc7.appspot.com",
    messagingSenderId: "148762744014",
    appId: "1:148762744014:web:ebcd4f9e17c225d727ac9f",
    measurementId: "G-F9674JPECW"
  };

export  const app = initializeApp(firebaseConfig);     

export const database = getFirestore(app);

