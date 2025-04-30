import { useState } from 'react';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { LoginModal } from '../components/utils/LoginModal';
import { NewsFeed } from '../components/utils/NewsFeed';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Últimas da FURIA</h2>
        <NewsFeed />
      </main>
      <Footer />
    </div>
  );
}
