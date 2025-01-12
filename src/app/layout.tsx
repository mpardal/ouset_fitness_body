import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Ouest Fitness Body",
    description: "Événement de sport, salon de fitness, Nantes, Loire Atlantique",
    openGraph: {
        title: "Ouest Fitness Body - Événement Sport et Fitness",
        description:
            "Participez à l'événement Ouest Fitness Body : salon du fitness, concours sportifs et bien-être à Nantes.",
        url: "https://ouestfitnessbody.com",
        siteName: "Ouest Fitness Body",
        images: [
            {
                url: "https://ouestfitnessbody.com/banniere-OFB.JPG", // URL de l'image
                width: 1200, // Dimensions recommandées pour Open Graph
                height: 630,
                alt: "Ouest Fitness Body - Événement Sport et Fitness",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ouest Fitness Body - Événement Sport et Fitness",
        description:
            "Découvrez Ouest Fitness Body, le rendez-vous incontournable pour les passionnés de sport et de fitness à Nantes.",
        images: ["https://ouestfitnessbody.com/banniere-OFB.JPG"], // URL de l'image pour Twitter
        site: "@OuestFitnessBody", // Remplacez par votre compte Twitter
    },
    alternates: {
        canonical: "https://ouestfitnessbody.com", // Lien canonique
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className="bg-blue-200 mx-auto">
        <Layout>{children}</Layout>
        <Analytics />
        </body>
        </html>
    );
}