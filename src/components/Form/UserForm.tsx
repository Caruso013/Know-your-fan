import React, { useState } from 'react';

interface UserFormProps {
  onClose: () => void;
  onSubmit: (userData: { name: string; age: number; email: string }) => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    onSubmit({ name, age: Number(age), email });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Cadastro de Fã</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Idade</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.valueAsNumber || '')}
              className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 rounded transition-colors"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};
