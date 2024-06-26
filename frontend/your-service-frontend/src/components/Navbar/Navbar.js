import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiClipboard, FiInfo, FiMail } from 'react-icons/fi'; // Importe os ícones desejados

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              Serviços Profissionais Remotos
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 text-white hover:bg-gray-800 rounded-md transition duration-300">
              <FiHome className="mr-1" /> Home
            </Link>
            <Link to="/services" className="flex items-center px-3 py-2 text-white hover:bg-gray-800 rounded-md transition duration-300">
              <FiClipboard className="mr-1" /> Serviços
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 text-white hover:bg-gray-800 rounded-md transition duration-300">
              <FiInfo className="mr-1" /> Sobre
            </Link>
            <Link to="/contact" className="flex items-center px-3 py-2 text-white hover:bg-gray-800 rounded-md transition duration-300">
              <FiMail className="mr-1" /> Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
