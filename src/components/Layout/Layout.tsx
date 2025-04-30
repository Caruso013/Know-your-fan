import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-furiaBlack text-white font-sans">
      <header className="bg-furiaYellow text-furiaBlack px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Know Your Fan</h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="text-center text-sm text-gray-400 py-4 border-t border-gray-700 mt-8">
        &copy; 2025 Know Your Fan. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Layout;
