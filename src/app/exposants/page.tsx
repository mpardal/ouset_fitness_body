"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore } from "@/lib/firebaseConfig";

type Exposant = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
};

export default function ExposantsPage() {
    const [exposants, setExposants] = useState<Exposant[]>([]);
    const [filteredExposants, setFilteredExposants] = useState<Exposant[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(false);

    useEffect(() => {
        const fetchExposants = async () => {
            try {
                const exposantsRef = collection(firestore, "exposants");
                const exposantsQuery = query(exposantsRef, orderBy("name"));
                const snapshot = await getDocs(exposantsQuery);
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    imageUrl: doc.data().imageUrl,
                    description: doc.data().description, // Assurez-vous que ce champ est bien dans Firestore
                }));
                setExposants(data);
                setFilteredExposants(data); // Initialiser avec les exposants triés
            } catch (error) {
                console.error("Erreur lors de la récupération des exposants :", error);
            }
        };

        fetchExposants();
    }, []);

    // Filtrer les exposants en fonction de la recherche
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = exposants.filter(
            (exposant) =>
                exposant.name.toLowerCase().includes(value) ||
                exposant.description.toLowerCase().includes(value)
        );
        setFilteredExposants(filtered);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-5 text-black text-center">Exposants</h1>

            {/* Bouton et Barre de Recherche */}
            <div className="mb-6 text-center">
                {!showSearchBar && exposants.length >= 8 && (
                    <button
                        onClick={() => setShowSearchBar(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M9.75 17.25a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                            />
                        </svg>
                        <span>Filtre</span>
                    </button>
                )}

                {showSearchBar && (
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Écrivez votre recherche..."
                        className="w-full p-3 border rounded-md shadow-sm"
                    />
                )}
            </div>

            {/* Liste des exposants */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
                {filteredExposants.length > 0 ? (
                    filteredExposants.map((exposant) => (
                        <Link href={`/exposants/${exposant.id}`} key={exposant.id}>
                            <div className="border border-gray-400 rounded-lg shadow-sm hover:shadow-md transition p-4 text-center cursor-pointer">
                                <Image
                                    src={exposant.imageUrl}
                                    alt={exposant.name}
                                    width={200}
                                    height={200}
                                    className="mx-auto rounded-lg"
                                />
                                <p className="mt-2 text-lg font-bold">{exposant.name}</p>
                                <p className="text-gray-600 text-sm">{exposant.description}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">
                        Aucun exposant correspondant à la recherche.
                    </p>
                )}
            </div>
        </div>
    );
}