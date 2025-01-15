import { HomeIcon, TrophyIcon, UserIcon, InformationCircleIcon, TicketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Menu responsive */}
            <header>
                {/* Menu en haut pour les grands écrans */}
                <nav className="hidden md:flex justify-between items-center shadow-md top-0 left-0 w-full bg-gray-100 px-8">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="font-serif text-lg text-blue-700 font-semibold">Ouest Fitness Body</span>
                    </div>

                    {/* Menu */}
                    <ul className="flex space-x-12 xl:space-x-16 py-4 text-gray-700 mr-5">
                        <li>
                            <Link href="/" className="flex gap-2 items-center hover:text-blue-500">
                                <HomeIcon className="h-5 w-5" />
                                <span>Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/concours" className="flex gap-2 items-center hover:text-blue-500">
                                <TrophyIcon className="h-5 w-5" />
                                <span>Concours ludique</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/exposants" className="flex gap-2 items-center hover:text-blue-500">
                                <UserIcon className="h-5 w-5" />
                                <span>Exposants</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/billetterie" className="flex gap-2 items-center hover:text-blue-500">
                                <TicketIcon className="h-5 w-5" />
                                <span>Billetterie</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="flex gap-2 items-center hover:text-blue-500">
                                <InformationCircleIcon className="h-5 w-5" />
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>

                    {/* Profil Icon */}
                    {/*<div>
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300">
                            <UserIcon className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>*/}
                </nav>

                {/* Menu mobile en bas pour les petits écrans */}
                <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 z-20">
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
                            <Link href="/billetterie" className="flex flex-col items-center hover:text-blue-500">
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
            <main className="px-2 py-5 md:px-0 mx-auto md:container mb-10">
                {children}
            </main>

            {/* Footer ou menu mobile selon l'écran */}
            <footer>
                {/* Footer pour les grands écrans */}
                <div className="hidden md:block bg-gray-100 text-white py-4 text-center bottom-0 fixed w-full">
                    © 2025 Ouest Fitness Body
                </div>
            </footer>
        </div>
    );
}