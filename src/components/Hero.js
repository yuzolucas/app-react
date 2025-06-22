import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg animate-fade-in">
        <h1 className="text-5xl font-bold mb-4">Olá, nós somos estudantes da FIAP School</h1>
        <p className="text-xl">Bem-vindo(a) ao nosso portfólio.</p>
      </div>
    </div>
  );
};

export default Hero;