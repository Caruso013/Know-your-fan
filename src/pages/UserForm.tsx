import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '../components/FormInput';

// Definir o esquema de validação com Zod
const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  age: z.number().min(13, "Você deve ter pelo menos 13 anos para se registrar"),
  socialMedia: z.string().url("Informe uma URL válida"),
});

type FormData = z.infer<typeof formSchema>;

const UserForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    alert("Formulário enviado com sucesso!");
    console.log(data); // Aqui você pode fazer o que quiser com os dados
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cadastre-se como Fã</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Nome"
          id="name"
          type="text"
          register={register}
          error={errors.name?.message}
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          register={register}
          error={errors.email?.message}
        />
        <FormInput
          label="Idade"
          id="age"
          type="number"
          register={register}
          error={errors.age?.message}
        />
        <FormInput
          label="Link da Rede Social"
          id="socialMedia"
          type="text"
          register={register}
          error={errors.socialMedia?.message}
        />
        <button
          type="submit"
          className="w-full bg-furiaYellow text-black font-bold py-2 px-4 rounded-lg mt-4"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default UserForm;
