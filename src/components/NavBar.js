import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold hover:text-blue-400 transition duration-300">Nosso Portfólio</a>
        <ul className="flex space-x-6">
          <li><a href="#inicio" className="hover:text-blue-400 transition duration-300">Início</a></li>
          <li><a href="#projetos" className="hover:text-blue-400 transition duration-300">Projetos</a></li>
          <li><a href="#sobre" className="hover:text-blue-400 transition duration-300">Sobre</a></li>
          <li><a href="#contato" className="hover:text-blue-400 transition duration-300">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;