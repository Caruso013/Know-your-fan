interface FanCardProps {
  name: string;
  age: number;
  level: string;
}

const FanCard: React.FC<FanCardProps> = ({ name, age, level }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl">{name}</h2>
      <p className="text-lg">Idade: {age}</p>
      <p className="text-lg">Nível: {level}</p>
      <div className="mt-2">
        {/* Exibir benefícios do nível aqui */}
      </div>
    </div>
  );
};

export { FanCard };
