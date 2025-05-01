// src/components/Layout/Layout.tsx
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import {Header} from "./Header";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-furiaBlack text-white font-sans">
      <Header openModal={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children || <Outlet />}
      </main>
      <footer className="text-center text-sm text-gray-400 py-4 border-t border-gray-700 mt-8">
        &copy; 2025 Know Your Fan. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Layout;
