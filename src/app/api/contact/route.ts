// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nom, prenom, email, raison, message } = body;

        // 1. Sauvegarde dans Firebase Firestore
        const docRef = await addDoc(collection(firestore, "contacts"), {
            nom,
            prenom,
            email,
            raison,
            message,
            date: new Date().toISOString(),
        });

        // Configurer Nodemailer avec OAuth2
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USER, // Adresse Gmail utilisée pour envoyer les e-mails
                clientId: process.env.OAUTH_CLIENT_ID, // Client ID OAuth2
                clientSecret: process.env.OAUTH_CLIENT_SECRET, // Client Secret OAuth2
                refreshToken: process.env.OAUTH_REFRESH_TOKEN, // Refresh Token OAuth2
            },
        });

        // Préparer les données de l'e-mail
        const mailOptions = {
            from: process.env.EMAIL_FROM, // Adresse de l'expéditeur
            to: "ouesstfitnessbody@gmail.com", // Adresse de destination
            subject: `Nouveau formulaire de contact : ${raison}`,
            text: `
Nom : ${nom} - Prénom : ${prenom} (Email : ${email})
Raison : ${raison}

Message : ${message}
            `,
        };

        // Envoyer l'e-mail
        await transporter.sendMail(mailOptions);


        return NextResponse.json({ success: true, docId: docRef.id });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return NextResponse.json({success: false, error: error.message}, {status: 500});
        }
    }
}