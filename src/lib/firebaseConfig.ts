// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

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
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

/**
 * Fonction pour récupérer l'eventId depuis Firestore
 * @returns L'eventId ou une erreur
 */
export const fetchEventIdFromFirestore = async (): Promise<number> => {
    const docRef = doc(firestore, "events", "weezevent"); // Chemin vers le document
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        throw new Error("Le document 'weezevent' n'existe pas dans la collection 'events'.");
    }

    const data = docSnap.data();
    if (!data?.eventId) {
        throw new Error("L'eventId est manquant dans le document 'weezevent'.");
    }
    return data.eventId; // Retourne l'eventId
};