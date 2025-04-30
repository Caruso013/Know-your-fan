import React from 'react';
import Header from '../components/Layout/Header';
import UserForm from './UserForm';
import Footer from '../components/Layout/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex justify-center items-center bg-furiaBlack text-white">
        <UserForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
