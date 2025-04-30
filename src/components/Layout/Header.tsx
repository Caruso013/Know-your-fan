import { useState } from 'react';
import { LoginModal } from '../utils/LoginModal';

export function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-2xl font-bold">Know Your Fan</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800"
      >
        Login
      </button>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </header>
  );
}

export default Header;
