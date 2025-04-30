// src/components/FanCard.tsx
import React from "react";

interface FanCardProps {
  photo: string;
  name: string;
  level: string;
}

const FanCard: React.FC<FanCardProps> = ({ photo, name, level }) => {
  // Tipo explícito para o objeto de níveis
  const levelStyles: Record<string, string> = {
    "Novato": "bg-gray-300 text-gray-800",
    "Intermediário": "bg-yellow-500 text-white",
    "Top Fã": "bg-furiaYellow text-furiaBlack",
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img src={photo} alt="Foto do Fã" className="w-full h-48 object-cover" />
        <img
          src="/assets/images/furia-logo.svg"
          alt="Logo da FURIA"
          className="absolute top-4 right-4 w-16 h-16"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <div
          className={`mt-2 text-center py-1 px-4 rounded-full ${levelStyles[level]}`}
        >
          {level}
        </div>
      </div>
    </div>
  );
};

export default FanCard;
