import { fetchEventIdFromFirestore } from "@/lib/firebaseConfig";
import Script from "next/script"; // Importer le composant Script

export default async function BilletteriePage() {
    try {
        // Récupérer l'eventId depuis Firestore
        const eventId = await fetchEventIdFromFirestore();

        return (
            <div>
                <div className="min-h-screen bg-gray-50 py-10 px-5 m-10 hidden md:block">
                    <a
                        title="Logiciel billetterie en ligne"
                        href="https://weezevent.com/?c=sys_widget"
                        className="weezevent-widget-integration"
                        data-src={`https://widget.weezevent.com/ticket/E${eventId}/?code=54142&locale=fr-FR&width_auto=0&color_primary=2a54cf`}
                        data-width={800}
                        data-height={2000}
                        data-id={eventId}
                        data-resize="0"
                        data-width_auto="0"
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
                    />
                </div>
                <div className="min-h-screen bg-gray-50 py-10 px-5 m-10 md:hidden block">
                    <a
                        title="Logiciel billetterie en ligne"
                        href="https://weezevent.com/?c=sys_widget"
                        className="weezevent-widget-integration"
                        data-src={`https://widget.weezevent.com/ticket/E${eventId}/?code=54142&locale=fr-FR&width_auto=0&color_primary=2a54cf`}
                        data-width={300}
                        data-height={1000}
                        data-id={eventId}
                        data-resize="0"
                        data-width_auto="0"
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
                    />
                </div>
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