"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        raison: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ nom: "", prenom: "", email: "", raison: "", message: "" });
                setStatus("Message envoyé avec succès !");
            } else {
                throw new Error("Une erreur est survenue");
            }
        } catch (error) {
            console.error(error);
            setStatus("Erreur lors de l'envoi du message.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-full">
            {/* Formulaire en plein écran sur mobile */}
            <div className="w-full max-w-md p-4 bg-gray-50 shadow-lg rounded md:max-w-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Formulaire de contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Nom :</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="prenom" className="block text-gray-700 font-bold mb-2">Prénom :</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Adresse mail :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="raison" className="block text-gray-700 font-bold mb-2">Raison :</label>
                        <select
                            id="raison"
                            name="raison"
                            value={formData.raison}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            required
                        >
                            <option value="">-- Sélectionnez une raison --</option>
                            <option value="informations">Demande d&#39;informations</option>
                            <option value="avis">Avis</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Envoyer
                    </button>
                </form>
                {status && <p className="mt-4 text-center">{status}</p>}
            </div>
        </div>
    );
}