import { useEffect, useState } from 'react';

export const NewsFeed = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    // Aqui você pode pegar as notícias da FURIA de uma API, como do Twitter ou Google News
    const fetchedNews = [
      { title: 'FURIA conquista a primeira colocação no CS2!', link: '#' },
      { title: 'FURIA anuncia novo patrocinador para 2025.', link: '#' },
      { title: 'FURIA vence mais uma rodada da Kings League.', link: 'https://example.com' },
    ];

    setNews(fetchedNews);
  }, []);

  return (
    <div className="news-feed min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold text-center mb-8">Últimas Notícias da FURIA</h2>
      <ul className="w-full max-w-4xl space-y-4">
        {news.map((item, index) => (
          <li key={index} className="border-b border-gray-700 pb-4">
            <a
              href={item.link || '#'}
              className="text-blue-400 hover:underline text-xl"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
};
