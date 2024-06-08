import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-2 lg:w-3/4 mx-auto w-full ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-custom"><Link to="/">Saint Louis</Link></h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/contact" className="text-2xl">Me contacter</Link>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          
          <Link to="/contact" className="block text-2xl my-2">Me contacter</Link>
        </div>
      )}
    </nav>
  );
}
