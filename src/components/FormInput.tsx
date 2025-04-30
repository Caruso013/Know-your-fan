import React from "react";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<any>;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, type, register, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-medium text-sm mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className={`w-full px-4 py-2 border border-gray-600 rounded-xl bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
        error ? "border-red-500 focus:ring-red-500" : "focus:ring-furiaYellow"
         }`}
      />

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
