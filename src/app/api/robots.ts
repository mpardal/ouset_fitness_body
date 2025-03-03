import { NextResponse } from 'next/server';

export async function GET() {
    const robotsTxt = `
    User-agent: *
    Allow: /
    Sitemap: https://ouestfitnessbody.com/api/sitemap
  `;
    return new NextResponse(robotsTxt, {
        headers: { 'Content-Type': 'text/plain' },
    });
}