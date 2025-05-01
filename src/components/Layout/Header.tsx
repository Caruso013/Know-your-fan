import logo from '../../assets/images/logo-furia.svg';

export const Header = ({ openModal }: { openModal: () => void }) => {
  return (
    <header className="w-full bg-black text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo FURIA" className="auto invert h-10 w-auto transition-transform duration-300 hover:scale-105" />
        <h1 className="text-2xl font-bold">Know Your Fan</h1>
      </div>
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Cadastrar
      </button>
    </header>
  );
};
