import { HomeIcon, TrophyIcon, UserIcon, InformationCircleIcon, TicketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-blue-200">
            {/* Menu responsive */}
            <header>
                {/* Menu en haut pour les grands écrans */}
                <nav className="hidden md:flex justify-center shadow-md top-0 left-0 w-full bg-blue-100">
                    <ul className="flex space-x-28 xl:space-x-32 py-4 text-gray-700">
                        <li>
                            <Link href="/" className="flex gap-4 items-center hover:text-blue-500">
                                <HomeIcon className="h-6 w-6 mb-1" />
                                <span>Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/concours" className="flex gap-4 items-center hover:text-blue-500">
                                <TrophyIcon className="h-6 w-6 mb-1" />
                                <span>Concours ludique</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/exposants" className="flex gap-4 items-center hover:text-blue-500">
                                <UserIcon className="h-6 w-6 mb-1" />
                                <span>Exposants</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/billing" className="flex gap-4 items-center hover:text-blue-500">
                                <TicketIcon className="h-6 w-6 mb-1" />
                                <span>Billetterie</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="flex gap-4 items-center hover:text-blue-500">
                                <InformationCircleIcon className="h-6 w-6 mb-1" />
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Menu mobile en bas pour les petits écrans */}
                <nav className="md:hidden fixed bottom-0 left-0 w-full bg-blue-100 border-t border-gray-200 z-10">
                    <ul className="flex justify-around py-4 text-gray-700">
                        <li>
                            <Link href="/" className="flex flex-col items-center hover:text-blue-500">
                                <HomeIcon className="h-6 w-6 mb-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/concours" className="flex flex-col items-center hover:text-blue-500">
                                <TrophyIcon className="h-6 w-6 mb-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/exposants" className="flex flex-col items-center hover:text-blue-500">
                                <UserIcon className="h-6 w-6 mb-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/billing" className="flex flex-col items-center hover:text-blue-500">
                                <TicketIcon className="h-6 w-6 mb-1" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="flex flex-col items-center hover:text-blue-500">
                                <InformationCircleIcon className="h-6 w-6 mb-1" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Contenu principal */}
            <main className="flex-grow bg-white md:bg-blue-200 px-10 py-5 md:px-0 md:mx-auto md:container">
                {children}
            </main>

            {/* Footer ou menu mobile selon l'écran */}
            <footer>
                {/* Footer pour les grands écrans */}
                <div className="hidden md:block bg-blue-100 text-white py-4 text-center">
                    © 2025 Ouest Fitness Body
                </div>
            </footer>
        </div>
    );
}