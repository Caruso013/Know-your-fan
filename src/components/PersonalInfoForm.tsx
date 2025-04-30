import { useState } from 'react';

const PersonalInfoForm = () => {
  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    endereco: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      <input
        name="nome"
        placeholder="Nome completo"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.nome}
      />
      <input
        name="cpf"
        placeholder="CPF"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.cpf}
      />
      <input
        name="endereco"
        placeholder="Endereço"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        value={form.endereco}
      />
    </form>
  );
};

export default PersonalInfoForm;
