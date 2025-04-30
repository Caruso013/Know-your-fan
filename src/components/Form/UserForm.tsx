import { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { UploadDocument } from '../UploadDocument';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!imageUrl || password.length < 8 || /^\d+$/.test(password)) {
      setError('Verifique os campos: senha deve ter ao menos 8 caracteres e não ser apenas números. A foto também é obrigatória.');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { avatar_url: imageUrl },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Usuário criado com sucesso!');
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-white text-xl mb-4">Cadastro de Fã</h2>
      <UploadDocument onUpload={setImageUrl} />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="w-full mb-3 p-2 rounded bg-gray-700 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded text-white"
      >
        Cadastrar
      </button>
    </div>
  );
};

export default UserForm;
