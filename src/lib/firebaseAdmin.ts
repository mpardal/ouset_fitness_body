import admin from "firebase-admin";

// Import statique pour le fichier JSON en local
import serviceAccount from "../../ouest-fitness-body-firebase_admin.json";

if (!admin.apps.length) {
    if (process.env.NODE_ENV === "production") {
        // Configuration pour l'environnement de production
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
    } else {
        // Configuration pour l'environnement local
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as admin.ServiceAccount), // Typé pour TypeScript
        });
    }
}

export const adminFirestore = admin.firestore();