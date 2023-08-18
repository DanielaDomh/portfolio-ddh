import React from 'react';
import { useState } from 'react';

const MenuPlegable = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <div className="navBar">
        <button className="dropdown-button" onClick={toggleMenu}>
        <box-icon name='menu' color='#fffffe' ></box-icon>
        </button>
        {isMenuOpen && (
                  <ul className="dropdown-list">
                  <li>
                    <a href="#home">Inicio</a>
                  </li>
                  <li>
                    <a href="#aboutMe">Sobre Mi</a>
                  </li>
                  <li>
                    <a href="#proyects">Proyectos</a>
                  </li>
                  <li>
                    <a href="#contact">Contacto</a>
                  </li>
                </ul>
        )}
      </div>
    );
};

export default MenuPlegable;

