import ConcoursSection from "@/components/ConcoursSection";

export default function ConcoursPage() {
    return (
        <main className="flex flex-col items-center justify-center">
            <ConcoursSection
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ouest-fitness-body-6a187.firebasestorage.app/o/hip-thrust.jpg?alt=media&token=38b78d2f-7c38-4a57-8d24-c1cf34f20408"
                title="Hip Trust"
                textPosition="right"
            />
            <ConcoursSection
                imageUrl="https://firebasestorage.googleapis.com/v0/b/ouest-fitness-body-6a187.firebasestorage.app/o/bras_de_fer.jpg?alt=media&token=4d286276-0888-4377-a826-eeea8c33e9c4"
                title="Bras de Fer"
                textPosition="left"
            />
            {/* Ajoutez plus de sections si nécessaire */}
        </main>
    );
}