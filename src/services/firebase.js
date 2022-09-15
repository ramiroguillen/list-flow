// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyC9CJ5OmrUN4XCnhVxKe4QVMoy_7ym_U2o",
    authDomain: "todo-list-6a1df.firebaseapp.com",
    projectId: "todo-list-6a1df",
    storageBucket: "todo-list-6a1df.appspot.com",
    messagingSenderId: "716794745644",
    appId: "1:716794745644:web:cdb35f1b78af6364345289",
    measurementId: "G-8YWBN0CKHP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);