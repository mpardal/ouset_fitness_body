// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtdwHmpAt4o1CC5MZM7XYWzrsddr3QhXo",
    authDomain: "ouest-fitness-body-6a187.firebaseapp.com",
    projectId: "ouest-fitness-body-6a187",
    storageBucket: "ouest-fitness-body-6a187.firebasestorage.app",
    messagingSenderId: "195830334184",
    appId: "1:195830334184:web:4f1d86c378229667e43f5d"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const firestore = getFirestore(app);