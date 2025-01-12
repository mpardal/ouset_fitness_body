"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebaseConfig";

type Exposant = {
    id: string;
    name: string;
    imageUrl: string;
};

export default function Page() {
    const [exposants, setExposants] = useState<Exposant[]>([]);

    useEffect(() => {
        const fetchExposants = async () => {
            const exposantsCollection = collection(firestore, "exposants");
            const snapshot = await getDocs(exposantsCollection);
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                imageUrl: doc.data().imageUrl,
            }));
            setExposants(data);
        };

        fetchExposants();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-5">Exposants</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {exposants.map((exposant) => (
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}