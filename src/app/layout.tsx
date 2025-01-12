import type { Metadata } from "next";
import "../styles/globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Ouest Fitness Body",
    description: "Événement de sport, salon de fitness, Nantes, Loire Atlantique",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body className="bg-blue-200 mx-auto">
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}