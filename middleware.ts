import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('authToken'); // Vérifiez votre méthode pour stocker l'auth

    // Si l'utilisateur n'est pas connecté et tente d'accéder au tableau de bord
    if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// Définir les routes protégées
export const config = {
    matcher: ['/dashboard/:path*'], // Appliquer le middleware à toutes les pages sous /dashboard
};