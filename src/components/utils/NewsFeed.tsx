export const NewsFeed = () => {
  const news = [
    {
      title: 'FURIA vence clássico contra MIBR no CS2!',
      description: 'Em uma partida eletrizante, a FURIA garantiu a vitória com um placar de 13x10.',
    },
    {
      title: 'Novos uniformes da FURIA são revelados!',
      description: 'Design moderno e agressivo, combinando com o espírito da equipe.',
    },
    {
      title: 'Agenda do mês: próximos jogos da FURIA',
      description: 'Confira os duelos em CS2, Valorant e League of Legends nos próximos dias.',
    },
  ];

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Últimas notícias da FURIA</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
