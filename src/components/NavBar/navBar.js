import './navBar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-links">
            <a href="#home">Home</a>
            <span>|</span>
            <a href="#quem-somos">Quem Somos</a>
            <span>|</span>
            <a href="#produtos">Produtos</a>
            <span>|</span>
            <a href="#localizacao">Nossa Localização</a>
        </div>
    </nav>
  );
};

export default Navbar;