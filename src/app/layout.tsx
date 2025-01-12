import type { Metadata } from "next";
import "../styles/globals.css";
import ResponsiveMenu from '../components/ResponsiveMenu';

export const metadata: Metadata = {
  title: "Ouest Fitness Body",
  description: "Événement de sport, salon de fitness, Nantes, Loire Atlantique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className="bg-blue-200"
      >
      <ResponsiveMenu />
        {children}
      </body>
    </html>
  );
}
