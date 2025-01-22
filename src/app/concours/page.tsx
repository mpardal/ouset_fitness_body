import ConcoursSection from "@/components/ConcoursSection";
import {IMAGES} from "@/constants/images";

export default function ConcoursPage() {
    return (
        <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold py-4 text-white text-center">Concours & challenges</h1>
                <ConcoursSection
                    imageUrl={IMAGES.bras_de_fer}
                    title="Bras de Fer"
                    textPosition="left"
                    text="Mettez votre force et votre stratégie à l’épreuve dans un duel amusant et convivial.
                Que vous soyez un amateur ou un vrai champion, tout le monde est le bienvenu pour relever ce défi ! 🏋️‍"
                    text2="💪 Préparez-vous à repousser vos limites dans une ambiance fun et conviviale.
                Inscrivez-vous vite, les places sont limitées ! 🔥"
                />
                <ConcoursSection
                    imageUrl={IMAGES.hip_trust}
                    title="Hip Trust"
                    textPosition="right"
                    text="Prouvez votre force et votre endurance en rejoignant notre défi de Hip Thrust.
                Que vous soyez débutant ou athlète confirmé, tout le monde a sa chance ! 🎉"
                    text2="🔥 Ambiance garantie : Rires, défis et encouragements vous attendent !
                Ne manquez pas cet événement sportif unique, et inscrivez-vous dès maintenant pour tenter votre chance ! ✨"
                />
                <ConcoursSection
                    imageUrl={IMAGES.powerlifting}
                    title="Powerlifting"
                    textPosition="left"
                    text="Rejoignez notre défi et testez votre force dans une ambiance motivante et conviviale !
                Que vous soyez débutant ou expert, tout le monde peut participer et se surpasser ! 🎉"
                    text2="🔗 À vos barres !
                Préparez-vous à vous challenger et à vous amuser dans un cadre sécurisé et motivant.
                Les places sont limitées, inscrivez-vous vite ! 🚨"
                />
                <ConcoursSection
                    imageUrl={IMAGES.squat}
                    title="Squat"
                    textPosition="right"
                    text="Montrez votre endurance et votre technique dans ce challenge amusant et accessible à tous !
                Rassemblez vos forces et vivez un moment sportif unique. 💪"
                    text2="🔥 Qui a les jambes les plus solides ?
                Participez et repoussez vos limites dans une ambiance fun et compétitive.
                Réservez vite votre place ! 🚀"
                />
                <ConcoursSection
                    imageUrl={IMAGES.tire_a_la_corde}
                    title="Tir à la corde"
                    textPosition="left"
                    text="Rassemblez vos amis ou faites équipe sur place pour un moment sportif et hilarant.
                Qui aura la meilleure tactique pour tirer l’équipe adverse ? 💪"
                    text2="✨ Bonne humeur et adrénaline garanties : Que le meilleur gagne !
                Inscrivez-vous seul ou en équipe et venez relever ce défi amusant."
                />
                <ConcoursSection
                    imageUrl={IMAGES.traction}
                    title="Traction"
                    textPosition="right"
                    text="Montrez vos capacités et essayez de battre votre record dans un défi motivant et accessible à tous les niveaux. 🔥"
                    text2="🚀 Qui sera le roi ou la reine des tractions ?
                Lancez-vous dans ce défi en solo ou avec vos amis et passez un moment inoubliable !"
                />
        </div>
    );
}