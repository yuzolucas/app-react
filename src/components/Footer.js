import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} Lucas Yuzo, Marcus Cruseiro e Pedro Japiassu. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;