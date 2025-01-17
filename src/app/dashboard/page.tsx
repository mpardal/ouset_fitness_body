'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { auth, firestore, storage } from '@/lib/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Image from "next/image";

interface Exposant {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export default function DashboardPage() {
    const [exposants, setExposants] = useState<Exposant[]>([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [existingImageUrl, setExistingImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null); // ID de l'exposant à modifier
    const router = useRouter();

    useEffect(() => {
        // Vérifie si l'utilisateur est connecté
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/login'); // Redirige vers la page de connexion si non connecté
            }
        });

        fetchExposants();

        return () => unsubscribe();
    }, [router]);

    const fetchExposants = async () => {
        const exposantsCollection = collection(firestore, 'exposants');
        const exposantsSnapshot = await getDocs(exposantsCollection);
        const exposantsList = exposantsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Exposant[];
        setExposants(exposantsList);
    };

    const handleAddOrEditExposant = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            let imageUrl = existingImageUrl;

            const generateSlug = (name: string): string => {
                return name
                    .toLowerCase()
                    .trim()
                    .replace(/ /g, '-') // Remplace les espaces par des tirets
                    .replace(/[^\w-]+/g, ''); // Supprime les caractères spéciaux
            };

            if (image) {
                const imageRef = ref(storage, `exposants/${image.name}`);
                await uploadBytes(imageRef, image);
                imageUrl = await getDownloadURL(imageRef);
            }

            const slug = generateSlug(name); // Génère le slug à partir du nom
            const exposantData = { name, description, imageUrl, slug }; // Ajoute le slug aux données

            if (editingId) {
                // Modifier l'exposant existant
                const exposantRef = doc(firestore, 'exposants', editingId);
                await updateDoc(exposantRef, exposantData);
            } else {
                // Ajouter un nouvel exposant
                const exposantsCollection = collection(firestore, 'exposants');
                await addDoc(exposantsCollection, exposantData);
            }

            resetForm(); // Réinitialise le formulaire
            fetchExposants(); // Actualise la liste
        } catch (error) {
            console.error("Erreur lors de l'ajout ou de la modification de l'exposant :", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteExposant = async (id: string) => {
        try {
            await deleteDoc(doc(firestore, 'exposants', id));
            fetchExposants();
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'exposant :', error);
        }
    };

    const handleEditExposant = async (id: string) => {
        try {
            const exposantDoc = await getDoc(doc(firestore, 'exposants', id));
            if (exposantDoc.exists()) {
                const data = exposantDoc.data() as Exposant;
                setName(data.name);
                setDescription(data.description);
                setExistingImageUrl(data.imageUrl);
                setEditingId(id); // Définit l'ID de l'exposant en cours de modification
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'exposant :', error);
        }
    };

    const resetForm = () => {
        setName('');
        setDescription('');
        setImage(null);
        setExistingImageUrl('');
        setEditingId(null); // Réinitialise l'état d'édition
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Gestion des exposants</h1>

            <form onSubmit={handleAddOrEditExposant} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Nom de l'exposant"
                        className="p-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="file"
                        className="p-2 border rounded"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                    <textarea
                        placeholder="Description"
                        className="p-2 border rounded col-span-1 md:col-span-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {existingImageUrl && (
                        <Image
                            src={existingImageUrl}
                            alt="Image actuelle"
                            className="max-w-xs max-h-48 border rounded-2xl"
                            width={150}
                            height={150}
                        />
                    )}
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                        disabled={loading}
                    >
                        {loading ? 'Enregistrement...' : editingId ? 'Modifier' : 'Ajouter'}
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
                            onClick={resetForm}
                        >
                            Annuler
                        </button>
                    )}
                </div>
            </form>

            <ul>
                {exposants.map((exposant) => (
                    <li key={exposant.id} className="mb-4 p-4 border rounded flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold">{exposant.name}</h2>
                            <p>{exposant.description}</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleEditExposant(exposant.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Modifier
                            </button>
                            <button
                                onClick={() => handleDeleteExposant(exposant.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Supprimer
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}