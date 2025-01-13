import { fetchEventIdFromFirestore } from "@/lib/firebaseConfig";
import { fetchEventById } from "@/lib/weezevent";
import Script from "next/script"; // Importer le composant Script

export default async function BilletteriePage() {
    try {
        // Récupérer l'eventId depuis Firestore
        const eventId = await fetchEventIdFromFirestore();

        // Récupérer les détails de l'événement via Weezevent API
        const event = await fetchEventById(eventId);

        return (
            <div className="min-h-screen bg-gray-50 py-10 px-5">
                <h1 className="text-4xl font-bold text-center mb-8">{event.name}</h1>
                <p className="text-gray-600 text-center mb-4">{event.description}</p>
                <p className="text-gray-500 text-center mb-8">
                    Date : {new Date(event.date).toLocaleDateString()}
                </p>

                <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-4">Détails de l&#39;événement</h2>
                </div>

                {/* Lien vers le widget Weezevent */}
                <a
                    title="Logiciel billetterie en ligne"
                    href="https://weezevent.com/?c=sys_widget"
                    className="weezevent-widget-integration"
                    data-src={`https://widget.weezevent.com/ticket/E${eventId}/?code=54142&locale=fr-FR&width_auto=1&color_primary=2a54cf`}
                    data-width="650"
                    data-height="600"
                    data-id="1262667"
                    data-resize="1"
                    data-width_auto="1"
                    data-noscroll="0"
                    data-use-container="yes"
                    data-type="neo"
                    target="_blank"
                >
                    Billetterie Weezevent
                </a>

                {/* Charger le script Weezevent de manière optimisée */}
                <Script
                    src="https://widget.weezevent.com/weez.js"
                    strategy="lazyOnload" // Charge le script après le chargement de la page
                    onLoad={() => {
                        console.log("Le script Weezevent a été chargé.");
                    }}
                />
            </div>
        );
    } catch (error: unknown) {
        // Gestion des erreurs
        if (error instanceof Error) {
            console.error(error.message);
            return (
                <div className="min-h-screen py-10 px-5">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        La billetterie n&#39;est pas encore ouverte
                    </h1>
                </div>
            );
        }
    }
}