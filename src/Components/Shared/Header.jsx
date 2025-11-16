import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'PRODUCTS', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PARTS', path: '/parts' },
    { name: 'TECHNOLOGY', path: '/technology' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto lg:px-25 px-6 flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/">
          <img
            className="border border-amber-300 h-10"
            src="/assetes/main_logo.png"
            alt="Logo"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 font-bold">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path}>
              {link.name}
            </NavLink>
          ))}
          <IoSearchSharp size={23} />
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black text-white flex flex-col items-start p-4 gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              {link.name}
            </NavLink>
          ))}
          <IoSearchSharp size={23} />
        </nav>
      )}
    </header>
  );
};

export default Header;
