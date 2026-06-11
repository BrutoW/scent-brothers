import React from 'react';

interface NavbarProps {
  children?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center bg-white/95 backdrop-blur-md z-50">
      <div className="text-2xl font-bold tracking-wider">ScentBrothers</div>
      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => scrollToSection('new')}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Nuevo
        </button>
        <button
          onClick={() => scrollToSection('trending')}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Tendencia
        </button>
        <button
          onClick={() => scrollToSection('luxury')}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Diseñador
        </button>
        <button
          onClick={() => scrollToSection('catalogo')}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Catálogo
        </button>
        {children}
      </div>
    </nav>
  );
};