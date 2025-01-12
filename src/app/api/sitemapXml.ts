import { NextResponse } from "next/server";
import { adminFirestore } from "@/lib/firebaseAdmin";

export const dynamic = "force-dynamic";

export async function GET() {
    const baseUrl = "https://ouestfitnessbody.com";
    const staticPages = ["", "/concours", "/exposants", "/contact", "/billetterie"];

    try {
        const exposantsSnapshot = await adminFirestore.collection("exposants").get();
        const exposants = exposantsSnapshot.docs.map((doc) => doc.id);

        const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${staticPages
            .map(
                (route) => `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>`
            )
            .join("")}
          ${exposants
            .map(
                (exposant) => `
            <url>
              <loc>${baseUrl}/exposants/${encodeURIComponent(exposant)}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>`
            )
            .join("")}
        </urlset>
      `;

        return new NextResponse(sitemap, {
            headers: { "Content-Type": "application/xml" },
        });
    } catch (error) {
        console.error("Erreur lors de la génération du sitemap :", error);
        return new NextResponse("Erreur interne du serveur", { status: 500 });
    }
}