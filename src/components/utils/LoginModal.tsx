// LoginModal.tsx
export const LoginModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="absolute top-2 right-2">X</button>
        <h2>Login</h2>
        {/* Conteúdo do modal */}
      </div>
    </div>
  );
};
