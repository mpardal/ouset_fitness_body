"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Définir une icône personnalisée
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const MapComponent = () => {
    // Déclarez explicitement que `position` est un tuple avec deux éléments
    const position: [number, number] = [47.222022, -1.641949]; // Coordonnées pour Nantes

    // Clé unique pour éviter les conflits de conteneur
    const mapKey = `${position[0]}-${position[1]}`;

    return (
        <MapContainer
            key={mapKey} // Ajoutez une clé basée sur les coordonnées
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "70%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    3 impasse du Bourrelier, 44800 Saint-Herblain <br /> Ouest Fitness & Body Expo
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;