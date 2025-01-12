import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https", // The protocol used by the image source
                hostname: "firebasestorage.googleapis.com", // The domain name of the image source
                port: "", // Leave empty unless a specific port is needed
                pathname: "/v0/b/**", // Match the specific path structure for Firebase storage
            },
            {
                protocol: "https",
                hostname: "pixabay.com", // Ajoutez le domaine autorisé ici
            },
        ],
    },
};

export default nextConfig;
