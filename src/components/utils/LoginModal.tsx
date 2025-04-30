// src/utils/LoginModal.tsx
import { useState } from 'react';
import { supabase } from '../services/supabaseClient';

export function LoginModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password: string) => {
    return (
      password.length >= 8 &&
      !/^(?:0123456789|1234567890|0987654321)$/.test(password)
    );
  };

  const handleLogin = async () => {
    if (!validatePassword(password)) {
      setError('Senha deve ter pelo menos 8 caracteres e não pode ser uma sequência numérica.');
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-sm">
        <h2 className="text-white text-xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-gray-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-3 p-2 rounded bg-gray-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-between mt-4">
          <button onClick={handleLogin} className="bg-fuchsia-600 px-4 py-2 rounded text-white">
            Entrar
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
