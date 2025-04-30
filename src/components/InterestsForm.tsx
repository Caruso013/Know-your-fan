import { useState } from 'react';

const InterestsForm = () => {
  const [interests, setInterests] = useState({
    jogos: '',
    eventos: '',
    produtosComprados: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInterests({ ...interests, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <input
        name="jogos"
        placeholder="Jogos favoritos (ex: CS2, LoL, Valorant)"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={interests.jogos}
      />
      <textarea
        name="eventos"
        placeholder="Eventos que participou no último ano"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={interests.eventos}
      />
      <input
        name="produtosComprados"
        placeholder="Produtos oficiais comprados (camisas, mousepad, etc)"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={interests.produtosComprados}
      />
    </form>
  );
};

export default InterestsForm;
