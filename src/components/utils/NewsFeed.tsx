import { useEffect, useState } from 'react';

export function NewsFeed() {
  const [news, setNews] = useState<string[]>([]);

  useEffect(() => {
    // Simula carregamento de notícias da FURIA
    setTimeout(() => {
      setNews([
        "FURIA vence clássico no CS2 e avança no torneio!",
        "Nova line-up da FURIA LoL é anunciada.",
        "FURIA na Kings League: confira os destaques da última rodada!",
      ]);
    }, 1000);
  }, []);

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Últimas Notícias da FURIA</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="bg-zinc-800 p-4 rounded shadow">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
