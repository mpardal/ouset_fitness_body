import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";
import {IMAGES} from "@/constants/images";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Ouest Fitness Body",
    description: "Événement de sport, salon de fitness, Nantes, Loire Atlantique",
    icons: {
        icon: IMAGES.logo, // Chemin vers votre favicon dans /public
    },
    openGraph: {
        title: "Ouest Fitness Body - Événement Sport et Fitness",
        description:
            "Le salon du fitness de l'ouest français, découvrez le fitness 2025, venez dans une énergie avec des milliers de passionnés. Participez à l'évènement fitness à Nantes en Loire Atlantique dans le 44 du 12 au 14 septembre",
        url: "https://ouestfitnessbody.com",
        siteName: "Ouest Fitness Body",
        images: [
            {
                url: "https://ouestfitnessbody.com/OFB-banniere.png", // URL de l'image
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
            "Le salon du fitness de l'ouest français, découvrez le fitness 2025, venez dans une énergie avec des milliers de passionnés. Participez à l'évènement fitness à Nantes en Loire Atlantique dans le 44 du 12 au 14 septembre",
        images: ["https://ouestfitnessbody.com/OFB-banniere.png"], // URL de l'image pour Twitter
        site: "@OuestFitnessBody", // Remplacez par votre compte Twitter
    },
    alternates: {
        canonical: "https://ouestfitnessbody.com", // Lien canonique
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <Layout>{children}</Layout>
        <Analytics />
        </body>
        </html>
    );
}