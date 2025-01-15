import React from "react";

type SectionProps = {
    imageUrl: string;
    title: string;
    textPosition: "left" | "right";
    text: string
    text2: null|string
};

const ConcoursSection: React.FC<SectionProps> = ({ imageUrl, title, textPosition, text, text2 }) => {
    return (
        <div
            className="relative w-full h-[500px] flex items-center my-2"
            style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div
                className={`absolute inset-0 bg-gray-900/50 z-0`} // Overlay légèrement transparent
            ></div>
            <div
                className={`relative z-10 text-white w-full max-w-[1200px] mx-auto px-6 md:px-12 flex ${
                    textPosition === "left" ? "justify-start" : "justify-end"
                }`}
            >
                <div className="bg-white bg-opacity-80 p-6 md:p-12 rounded-lg text-gray-900">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
                    <p className="text-lg">
                        {text}
                    </p>
                    <br/>
                    <p className="text-lg italic">
                        {text2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConcoursSection;