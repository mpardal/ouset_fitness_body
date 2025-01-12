import admin from "firebase-admin";

// Import statique pour le fichier JSON en local

if (!admin.apps.length) {
        // Configuration pour l'environnement de production
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
}

export const adminFirestore = admin.firestore();