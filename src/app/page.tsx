"use client";

import Image from "next/image";
import { IMAGES } from "@/constants/images";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

const Home = () => {
    return (
        <>
            <h1 className="text-3xl font-bold py-4 text-white text-center">
                Bienvenue au Ouest Fitness & Body Expo
            </h1>
            <div className="md:flex flex-col items-center justify-center w-full hidden">
                <Image
                    src={IMAGES.banniere}
                    alt="OFB"
                    className=" inset-0 w-full h-full object-cover"
                    width={800}
                    height={800}
                />
                <div className="w-full inset-0 flex flex-col justify-center items-center text-white px-6 py-10">
                    <p className="text-lg text-center max-w-2xl mb-4">
                        LE OUEST FITNESS & BODY EXPO EST UN ÉVÉNEMENT QUI A POUR BUT DE RÉUNIR TOUS LES AMATEURS DE
                        FITNESS,
                        MUSCULATION, CROSSFIT, SPORT SANTÉ DE L&#39;OUEST ET AUSSI LES PROFESSIONNELS DE CE SECTEUR.
                    </p>
                    <p className="text-lg text-center max-w-2xl mb-4">
                        UN ÉVÉNEMENT SOUS FORME DE FESTIVAL AVEC DE MULTIPLES ANIMATIONS, CONCOURS, SPECTACLES, ETC.,
                        MAIS ÉGALEMENT SOUS FORME DE SALON AVEC DES STANDS DE PROFESSIONNELS POUR UNE MISE EN RELATION
                        DES
                        PLUS EFFICACE.
                    </p>
                    <p className="text-lg text-center max-w-2xl mb-4">
                        LES AMATEURS DE FITNESS, MUSCULATION, CROSSFIT ET SPORT SANTÉ DE TOUT L&#39;OUEST SONT
                        ATTENDUS...
                        DE NANTES À CAEN EN PASSANT PAR RENNES, DE NANTES AU MANS EN PASSANT PAR ANGERS, ET DE NANTES À
                        LA ROCHELLE.
                    </p>
                    <p className="text-lg text-center max-w-2xl">
                        RDV LES 12, 13 ET 14 SEPTEMBRE 2025 À NANTES. SPORTIVEMENT, L&#39;ÉQUIPE OUEST FITNESS & BODY
                        EXPO.
                    </p>
                </div>

                {/* Section desktop : adresse et carte */}
                <div className="hidden md:flex w-full h-[500px] flex-row items-center mt-6">
                    <div className="text-center mx-auto font-extrabold text-2xl">
                        <p className="underline italic">Adresse :</p>
                        <p>Le Smile</p>
                        <p>2 chemin des cyprès</p>
                        <p>Route de Brimberne</p>
                        <p>44880 Sautron</p>
                    </div>
                    <MapComponent/>
                </div>
            </div>

            {/* Section mobile */}
            <div className="flex flex-col items-center justify-center md:hidden mt-6">
                {/* Bannière (mobile) */}
                <Image
                    src={IMAGES.banniere}
                    alt="OFB"
                    className="max-w-[90%] md:max-w-[80%] md:px-4 border-gray-50 border-2"
                    width={800}
                    height={800}
                />
                {/* Texte explicatif (mobile) */}
                <Image
                    src={IMAGES.explication}
                    alt="Explication OFB"
                    className="max-w-[90%] md:max-w-[80%] md:px-4 md:hidden block mt-4 border-gray-50 border-2"
                    width={800}
                    height={800}
                />
                {/* Adresse (mobile) */}
                <div className="text-center mx-auto font-extrabold text-2xl my-6 text-white">
                    <p className="underline italic mb-4">Adresse :</p>
                    <a
                        href="https://www.google.com/maps?q=47.252640,-1.658687"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white no-underline"
                    >
                        <p>Le Smile</p>
                        <p>2 chemin des cyprès</p>
                        <p>Route de Brimberne</p>
                        <p>44880 Sautron</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Home;