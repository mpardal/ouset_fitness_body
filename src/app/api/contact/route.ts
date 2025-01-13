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

        // 2. Envoi d'un e-mail avec Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL_FROM,
            to: process.env.NEXT_PUBLIC_EMAIL_TO,
            subject: "Nouveau formulaire de contact : `${raison}`",
            text: `
Nom : ${nom} - Prénom : ${prenom} (Email : ${email})
Raison : ${raison}

Message : ${message}
            `,
        });

        return NextResponse.json({ success: true, docId: docRef.id });
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return NextResponse.json({success: false, error: error.message}, {status: 500});
        }
    }
}