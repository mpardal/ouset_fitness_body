const WEEZEVENT_API_URL = "https://api.weezevent.com";
const WEEZEVENT_API_KEY = process.env.NEXT_PUBLIC_WEEZEVENT_API_KEY;

/**
 * Récupérer les détails d'un événement via l'API Weezevent
 * @param eventId - L'ID de l'événement
 * @returns Les données de l'événement
 */
export const fetchEventById = async (eventId: string) => {
    const response = await fetch(
        `${WEEZEVENT_API_URL}/events/${eventId}?api_key=${WEEZEVENT_API_KEY}`
    );

    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération de l'événement ${eventId}.`);
    }

    return response.json();
};

export const fetchEventsFromWeezevent = async () => {
    const response = await fetch(`${WEEZEVENT_API_URL}/events?api_key=${WEEZEVENT_API_KEY}`);
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des événements depuis Weezevent.");
    }
    const data = await response.json();
    return data?.events || [];
};