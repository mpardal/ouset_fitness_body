import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { firestore } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "465"),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Préparer les données de l'e-mail
        const mailOptions = {
            from: process.env.EMAIL_FROM, // Adresse expéditeur
            to: process.env.EMAIL_TO, // Adresse destinataire
            subject: `Nouveau formulaire de contact : ${raison}`,
            text: `
Nom : ${nom}
Prénom : ${prenom}
Email : ${email}
Raison : ${raison}

Message : 
${message}
            `,
        };

        // Envoyer l'e-mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, docId: docRef.id });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Erreur lors de l'envoi de l'e-mail :", error.message);
            return NextResponse.json(
                { success: false, error: error.message },
                { status: 500 }
            );
        }
    }
}