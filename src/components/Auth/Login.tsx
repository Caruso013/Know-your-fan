import { useState } from 'react';

interface User {
  name: string;
  level: string;
}

export const Login = ({ onLogin }: { onLogin: (user: User) => void }) => {
  const [name, setName] = useState('');

  const handleLogin = () => {
    const user = {
      name,
      level: "Furioso Global",
    };
    localStorage.setItem('user', JSON.stringify(user));
    onLogin(user);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome"
        className="p-2"
      />
      <button onClick={handleLogin} className="bg-blue-600 text-white py-2 px-4">
        Entrar
      </button>
    </div>
  );
};
