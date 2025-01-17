"use client";

import Image from "next/image";
import {IMAGES} from "@/constants/images";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

const banniere =
    <Image
        src={IMAGES.banniere}
        alt="OFB"
        className="max-w-[90%] md:max-w-[80%] md:px-4"
        width={800}
        height={800}
    />

const Home = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold py-4 text-black text-center">Bienvenue au Ouest Fitness & Body Expo</h1>
          <div className="md:flex flex-col items-center justify-center hidden">
              <div className="flex flex-row items-center">
                  {banniere}
                  <div className="my-6 max-w-[70%] md:max-w-[80%] md:px-4 text-center font-semibold hidden md:block">
                      <p>
                          LE OUEST FITNESS & BODY EXPO EST UN ÉVÉNEMENT QUI A POUR BUT DE RÉUNIR TOUS LES AMATEURS DE
                          FITNESS,
                          MUSCULATION, CROSSFIT, SPORT SANTÉ DE L&#39;OUEST ET AUSSI LES PROFESSIONNELS DE CE SECTEUR.
                      </p>
                      <br/>
                      <p>
                          UN ÉVÉNEMENT SOUS FORME DE FESTIVAL AVEC DE MULTIPLES ANIMATIONS, CONCOURS, SPECTACLES ETC...
                          MAIS ÉGALEMENT SOUS FORME DE SALON AVEC DES STANDS DE PROFESSIONNELS DU SECTEUR POUR UNE MISE
                          EN
                          RELATION DES PLUS EFFICACE.
                      </p>
                      <br/>
                      <p>
                          LES AMATEURS DE FITNESS, MUSCULATION, CROSSFIT ET SPORT SANTE DE TOUT L&#39;OUEST SONT
                          ATTENDUS...
                          DE NANTES À CAEN EN PASSANT PAR RENNES. DE NANTES AU MANS EN PASSANT PAR ANGERS.
                          DE NANTES À BREST EN PASSANT PAR QUIMPER, VANNES, SAINT-NAZAIRE DE NANTES À LA ROCHELLE EN
                          PASSANT PAR
                          POITIERS, LA ROCHE-SUR-YON, CHOLET.
                      </p>
                      <br/>
                      <p>
                          RDV À TOUS LES 12 13 14 SEPTEMBRE 2025 À NANTES.
                          SPORTIVEMENT! L&#39;ÉQUIPE OUEST FITNESS & BODY EXPO
                      </p>
                      <br/>
                  </div>
              </div>
              <div className="hidden md:flex w-full h-[500px] flex-row items-center">
                  <div className="text-center mx-auto font-extrabold text-2xl">
                      <p className="underline italic">Adresse :</p>
                      <br/>
                      <p>Le sporting</p>
                      <p>3 impasse du Bourrelier</p>
                      <p>44800 Saint-Herblain</p>
                  </div>
                  <MapComponent/>
              </div>
          </div>
          <div className="flex flex-col items-center justify-center md:hidden">
              {banniere}
              <Image
                  src={IMAGES.explication}
                  alt="explication OFB"
                  className="max-w-[90%] md:max-w-[80%] md:px-4 md:hidden block"
                  width={800}
                  height={800}
              />
              <div className="block md:hidden text-center">
                  <div className="text-center mx-auto font-extrabold text-2xl my-6 text-black">
                      <p className="underline italic">Adresse :</p>
                      <br/>
                      <a
                          href="https://www.google.com/maps?q=47.222022,-1.641949"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black no-underline"
                      >
                      <p>Le sporting</p>
                      <p>3 impasse du Bourrelier</p>
                      <p>44800 Saint-Herblain</p>
                  </a>
                  </div>
              </div>
          </div>


      </div>
  )
      ;
};

export default Home;