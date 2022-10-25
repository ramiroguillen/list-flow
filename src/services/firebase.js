import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyC9CJ5OmrUN4XCnhVxKe4QVMoy_7ym_U2o",
    authDomain: "todo-list-6a1df.firebaseapp.com",
    projectId: "todo-list-6a1df",
    storageBucket: "todo-list-6a1df.appspot.com",
    messagingSenderId: "716794745644",
    appId: "1:716794745644:web:cdb35f1b78af6364345289",
    measurementId: "G-8YWBN0CKHP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);