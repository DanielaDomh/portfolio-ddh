import React from "react";

const NavBar = () => {
  return (
      <div className="navBar-section">
        <ul className="navBar">
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
      </div>
  );
};

export default NavBar;
