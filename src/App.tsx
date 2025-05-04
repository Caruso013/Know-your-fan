import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { NewsFeed } from './components/utils/NewsFeed';
import { UserForm } from './components/Form/UserForm';
import { FanCard } from './components/utils/FanCard';
import { supabase } from './components/services/supabaseClient';

interface UserData {
  name: string;
  age: number;
  email: string;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUserSubmit = async (userData: UserData) => {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .insert([userData])
        .select();
      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao salvar os dados. Verifique a tabela e permissões.');
      } else {
        if (Array.isArray(data) && data.length > 0) {
          setUserData(data[0]);
        }
        alert('Cadastro realizado com sucesso!');
        closeModal();
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
      alert('Erro inesperado.');
    }
  };

  const determineFanLevel = (age: number): string => {
    if (age >= 18) return 'Furioso Global';
    else if (age >= 15) return 'Furioso Ouro';
    else if (age >= 12) return 'Furioso Prata';
    else return 'Furioso Iniciante';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center">
      {/* Header com Logo da FURIA */}
      <Header openModal={openModal} />

      {/* Exibição do formulário de cadastro */}
      {isModalOpen && <UserForm onClose={closeModal} onSubmit={handleUserSubmit} />}

      {/* Exibição dos benefícios do nível de fã */}
      {userData && (
        <div className="mt-10 w-full max-w-3xl px-4">
          <FanCard
            name={userData.name}
            age={userData.age}
            level={determineFanLevel(userData.age)}
          />
        </div>
      )}

      {/* Exibição das notícias da FURIA */}
      <div className="mt-10 w-full max-w-3xl px-4">
        <NewsFeed />
      </div>
    </div>
  );
}

//deploy

export default App;
