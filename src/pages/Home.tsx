import { useState, useEffect } from 'react';

export function Home() {
  const [news, setNews] = useState<string[]>([]);

  useEffect(() => {
    setNews([
      'FURIA vence grande campeonato!',
      'FURIA anuncia novo patrocinador!',
      'Próximo jogo da FURIA será contra X!'
    ]);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Know Your Fan!</h1>
      <div className="mb-6">
        <h2 className="text-xl mb-4">Últimas notícias da FURIA:</h2>
        <ul className="list-disc pl-5">
          {news.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <footer className="text-sm text-center">
        <p>&copy; 2025 Know Your Fan. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
