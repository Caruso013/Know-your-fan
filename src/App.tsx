import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { NewsFeed } from './components/utils/NewsFeed';
import { UserForm } from './components/Form/UserForm';
import { supabase } from './components/services/supabaseClient';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUserSubmit = async (userData: { name: string; age: number; email: string }) => {
    try {
      const { data, error } = await supabase
        .from('Profiles')
        .insert([userData]);

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        alert('Erro ao salvar os dados. Verifique a tabela e permissões.');
      } else {
        console.log('Usuário salvo:', data);
        alert('Cadastro realizado com sucesso!');
        closeModal();
      }
    } catch (err) {
      console.error('Erro inesperado:', err);
      alert('Erro inesperado.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-Black flex flex-col items-center">
      <Header openModal={openModal} />

      {isModalOpen && (
        <UserForm onClose={closeModal} onSubmit={handleUserSubmit} />
      )}

      <div className="mt-10 w-full max-w-3xl px-4">
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
