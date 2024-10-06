import React from 'react';
import img from '../assets/IMG.jpeg'; 

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={img} 
            alt="img" 
            className="w-12 h-12 rounded-full mr-2" 
          />
          <div className="text-2xl font-black">
            Tatiana Centro de soluciones
          </div>
        </div>

        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-blue-300 cursor-pointer">
            Inicio
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            Servicios
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            Acerca de
          </li>
          <li className="hover:text-blue-300 cursor-pointer">
            Contacto
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
