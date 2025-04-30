// Header.tsx
export const Header = ({ openModal }: { openModal: () => void }) => {
  return (
    <div className="flex justify-between items-center bg-blue-500 p-4 text-white">
      <div>Logo</div>
      <div>
        <button onClick={openModal} className="mx-4">
          Sign Up
        </button>
        <button onClick={openModal}>Login</button>
      </div>
    </div>
  );
};
