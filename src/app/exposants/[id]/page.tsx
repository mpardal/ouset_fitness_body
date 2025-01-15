"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebaseConfig";

type Exposant = {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
};

export default function ExposantPage() {
    const router = useRouter();
    const params = useParams(); // Utilisez `useParams` pour accéder à `params`
    const [exposant, setExposant] = useState<Exposant | null>(null);

    useEffect(() => {
        const fetchExposant = async () => {
            if (!params?.id) return; // Vérifiez que l'ID est disponible
            const exposantRef = doc(firestore, "exposants", params.id as string);
            const snapshot = await getDoc(exposantRef);
            if (snapshot.exists()) {
                setExposant({
                    id: snapshot.id,
                    name: snapshot.data().name,
                    imageUrl: snapshot.data().imageUrl,
                    description: snapshot.data().description,
                });
            } else {
                console.error("Exposant non trouvé");
            }
        };

        fetchExposant();
    }, [params?.id]);

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