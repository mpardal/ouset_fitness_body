'use client';

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebaseConfig";

type Exposant = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    slug: string;
};

export default function ExposantPage() {
    const router = useRouter();
    const { slug } = useParams(); // Utilisez `useParams` pour récupérer le slug
    const [exposant, setExposant] = useState<Exposant | null>(null);

    useEffect(() => {
        const fetchExposantBySlug = async () => {
            if (!slug) return;

            try {
                // Recherche l'exposant par son slug
                const exposantsCollection = collection(firestore, "exposants");
                const snapshot = await getDocs(exposantsCollection);

                const exposantDoc = snapshot.docs.find(
                    (doc) => doc.data().slug === slug
                );

                if (exposantDoc) {
                    setExposant({
                        id: exposantDoc.id,
                        name: exposantDoc.data().name,
                        imageUrl: exposantDoc.data().imageUrl,
                        description: exposantDoc.data().description,
                        slug: exposantDoc.data().slug,
                    });
                } else {
                    console.error("Exposant non trouvé");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération de l'exposant :", error);
            }
        };

        fetchExposantBySlug();
    }, [slug]);

    if (!exposant) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <button
                onClick={() => router.back()}
                className="mb-4 px-6 py-2 bg-blue-600 text-white rounded-md"
            >
                Retour
            </button>

            <div className="text-center">
                <h1 className="text-2xl font-bold mt-4 py-5 text-black text-center">{exposant.name}</h1>
                <Image
                    src={exposant.imageUrl}
                    alt={exposant.name}
                    className="mx-auto w-1/4 max-w-[50%] sm:max-w-[90%] sm:px-4"
                    width={200}
                    height={200}
                />
                <p className="mt-2 text-gray-700 text-center">{exposant.description}</p>
            </div>
        </div>
    );
}