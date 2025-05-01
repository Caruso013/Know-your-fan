interface FanLevelBenefits {
  [key: string]: {
    color: string;
    benefits: string;
  };
}

const fanLevels: FanLevelBenefits = {
  "Furioso Prata": {
    color: "silver",
    benefits: "Benefício Prata: Acesso exclusivo a conteúdo básico.",
  },
  "Furioso Ouro": {
    color: "gold",
    benefits: "Benefício Ouro: Acesso a eventos especiais.",
  },
  "Furioso Platina": {
    color: "platinum",
    benefits: "Benefício Platina: Merchandising exclusivo.",
  },
  "Furioso Global": {
    color: "black",
    benefits: "Benefício Global: Acesso a conteúdo VIP e participação em torneios.",
  },
};


const determineFanLevel = (age: number) => {
  if (age >= 18) return "Furioso Global";
  else if (age >= 15) return "Furioso Ouro";
  else if (age >= 12) return "Furioso Prata";
  else return "Furioso Iniciante";
};

const FanCard = ({ name, age, level }: { name: string; age: number; level: string }) => {
  const { color, benefits } = fanLevels[level];

  return (
    <div className="p-4 rounded-lg bg-gray-800 text-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-md">Idade: {age}</p>
      <div className={`mt-2 p-4 bg-${color}-500 rounded-md`}>
        <h3 className="text-lg font-bold">{level}</h3>
        <p>{benefits}</p>
      </div>
    </div>
  );
};

export { FanCard, determineFanLevel };
