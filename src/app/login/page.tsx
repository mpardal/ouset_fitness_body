'use client';

import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebaseConfig';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Vérifier si un utilisateur est déjà connecté
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/dashboard'); // Rediriger vers le tableau de bord si connecté
            }
        });

        return () => unsubscribe(); // Nettoyer le listener
    }, [router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard'); // Redirection après connexion réussie
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError('Erreur de connexion. Vérifiez vos identifiants.');
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form onSubmit={handleLogin} className="bg-gray-50 p-6 rounded shadow-md w-full">
                <h1 className="text-3xl font-bold py-4 text-black text-center">Connexion</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-4 border rounded text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full p-2 mb-4 border rounded text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-[#16398d] text-gray-200  px-4 py-2 rounded w-full">
                    Se connecter
                </button>
            </form>
        </div>
    );
}