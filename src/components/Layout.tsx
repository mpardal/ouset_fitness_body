'use client';

import {
    HomeIcon,
    TrophyIcon,
    UserIcon,
    InformationCircleIcon,
    TicketIcon,
    UserCircleIcon, XCircleIcon, ListBulletIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from 'react';
import {IMAGES} from "@/constants/images";
import Image from "next/image";
import React from "react";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Vérifier si l'utilisateur est connecté
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth); // Déconnecter l'utilisateur
            router.push('/');
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#03113c] text-gray-200">
            {/* Menu responsive */}
            <header>
                {/* Menu en haut pour les grands écrans */}
                <nav
                    className="hidden md:flex justify-between items-center shadow-md top-0 left-0 w-full bg-[#16398d] px-8 p-3">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 rounded">
                        <Image
                            src={IMAGES.logo}
                            alt="logo OFB"
                            className="mx-auto max-w-[70%] md:max-w-[80%] md:px-4 rounded-2xl"
                            width={150}
                            height={150}
                        />
                    </div>

                    {/* Menu */}
                    <ul className="flex py-4 mr-5">
                        <li>
                            <Link href="/" className="flex gap-2 items-center hover:text-[#55bcf9] pr-4">
                                <HomeIcon className="h-5 w-5"/>
                                <span>Accueil</span>
                            </Link>
                        </li>
                        <li className="border-l border-gray-300 px-4">
                            <Link href="/concours" className="flex gap-2 items-center hover:text-[#55bcf9]">
                                <TrophyIcon className="h-5 w-5"/>
                                <span>Concours ludique</span>
                            </Link>
                        </li>
                        <li className="border-l border-gray-300 px-4">
                            <Link href="/exposants" className="flex gap-2 items-center hover:text-[#55bcf9]">
                                <UserIcon className="h-5 w-5"/>
                                <span>Exposants</span>
                            </Link>
                        </li>
                        <li className="border-l border-gray-300 px-4">
                            <Link href="/billetterie" className="flex gap-2 items-center hover:text-[#55bcf9]">
                                <TicketIcon className="h-5 w-5"/>
                                <span>Billetterie</span>
                            </Link>
                        </li>
                        <li className="border-l border-gray-300 pl-4">
                            <Link href="/contact" className="flex gap-2 items-center hover:text-[#55bcf9]">
                                <InformationCircleIcon className="h-5 w-5"/>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Profil Section */}
                    <div>
                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                {/* Bouton Dashboard */}
                                <Link href="/dashboard" className="flex gap-2 items-center hover:text-[#55bcf9]">
                                    <ListBulletIcon className="h-6 w-6"/>
                                    <span>Dashboard</span>
                                </Link>
                                <XCircleIcon className="h-6 w-6 text-red-700 cursor-pointer" onClick={handleLogout} />
                            </div>
                        ) : (
                            // Bouton Connexion
                            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
                                <Link href="/login" className="flex gap-2 items-center hover:text-[#55bcf9]">
                                    <UserCircleIcon className="h-6 w-6 text-gray-700" />
                                </Link>
                            </button>
                        )}
                    </div>
                </nav>

                {/* Menu mobile en bas pour les petits écrans */}
                <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#03113c] text-gray-200 border-t  z-20">
                    <ul className="flex justify-around py-4  text-gray-200">
                        <li>
                            <Link href="/" className="flex flex-col items-center">
                                <HomeIcon className="h-6 w-6 mb-1"/>
                            </Link>
                        </li>
                        <li className=" text-gray-200">
                            |
                        </li>
                        <li>
                            <Link href="/concours" className="flex flex-col items-center">
                                <TrophyIcon className="h-6 w-6 mb-1"/>
                            </Link>
                        </li>
                        <li className=" text-gray-200">
                            |
                        </li>
                        <li>
                            <Link href="/exposants" className="flex flex-col items-center">
                                <UserIcon className="h-6 w-6 mb-1"/>
                            </Link>
                        </li>
                        <li className=" text-gray-200">
                            |
                        </li>
                        <li>
                            <Link href="/billetterie" className="flex flex-col items-center">
                                <TicketIcon className="h-6 w-6 mb-1"/>
                            </Link>
                        </li>
                        <li className=" text-gray-200">
                            |
                        </li>
                        <li>
                            <Link href="/contact" className="flex flex-col items-center ">
                                <InformationCircleIcon className="h-6 w-6 mb-1"/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Contenu principal */}
            <main className="py-5 md:px-0 mx-auto container mb-10" style={{paddingBottom: '60px'}}>
                {children}
            </main>

            <footer>
                <div className="hidden md:block z-50 bg-[#16398d] text-gray-200 py-4 text-center bottom-0 fixed w-full">
                    © 2025 Ouest Fitness Body
                </div>
            </footer>
        </div>
    );
}