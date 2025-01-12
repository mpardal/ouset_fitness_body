// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN_FIREBASE,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID_FIREBASE,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET_FIREBASE,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSENGER_SENDER_ID_FIREBASE,
    appId: process.env.NEXT_PUBLIC_APP_ID_FIREBASE
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);