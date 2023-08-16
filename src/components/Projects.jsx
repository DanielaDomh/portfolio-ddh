import React from "react";

const Projects = () => {

  return (
    <div>
      <article id="proyects" className="projects">
        <h2>Algunos proyectos</h2>

        <div className="project-box">
            <div>
              <img src="RICKANDMORTY.png" />
              <div className="title-container" />
              <div className="project-title">R&M CHARACTERS</div>
              <p>En esta aplicación se consume una API, se muestran personajes de la serie, agrupados por lugar de residencia con un filtro de búsqueda.</p>
            </div>
            <a href="https://rickandmorty-characters-ddh.netlify.app/" target="_blank">Ver APP</a>
            <a href="https://github.com/DanielaDomh/Rick-and-Morty-Characters" target="_blank">Ver Código</a>
          
        </div>
        <div className="project-box">
            <div>
              <img src="POKEDEX.png" />
              <div className="title-container" />
              <div className="project-title">POKEDEX</div>
              <p>Aplicación creada con REACT, consume una API, utilizamos REACT ROUTER y REDUX. Podemos loguearnos, ver y filtrar personajes. </p>
            </div>
          <a
            href="https://strong-gumdrop-d31ba8.netlify.app/#/"
            target="_blank">Ver APP</a>
            <a href="https://github.com/DanielaDomh/pokeapi" target="_blank">Ver Código</a>
        </div>

        <div className="project-box">
          
            <div>
              <img src="ECOMERCE.png"/>
              <div className="title-container" />
              <div className="project-title">ECOMMERCE</div>
              <p>Aplicación creada con JavaScript, HTML y CSS, la aplicación tiene un carrito funcional, y campo de código de descuentos.</p>
            </div>
            <a
            href="https://e-commerce-gen25-g2.netlify.app/"
            target="_blank"
          >Ver APP</a>
          <a href="https://github.com/DanielaDomh/ecommerce-academlo" target="_blank">Ver Código</a>
        </div>

        <div className="project-box">
            <div>
              <img src="CRUD.png"/>
              <div className="title-container" />
              <div className="project-title">CRUD USERS APP</div>
              <p>Apliación creada con REACT se utiliza Bootstrap, permite crear, leer, actualizar y eliminar usuarios de una forma intuitiva.</p>
            </div>
            <a
            href="https://funny-treacle-3e8185.netlify.app/"
            target="_blank"
          >Ver APP</a>
          <a href="https://github.com/DanielaDomh/crud-api" target="_blank">Ver Código</a>
        </div>

        <div className="project-box">
            <div>
              <img src="ECOMMERCE-REACT.png"/>
              <div className="title-container" />
              <div className="project-title">ECOMMERCE APP</div>
              <p>Aplicación creada con REACT, consume una API y nos permite hacer log in, ver y filtrar productos y contiene un carrito funcional.</p>
            </div>
            <a
            href="https://app-ecommerce-nu.vercel.app/"
            target="_blank"
          >Ver APP</a>
          <a href="https://github.com/DanielaDomh/crud-api" target="_blank">Ver Código</a>
        </div>

        <a
          href="https://github.com/DanielaDomh?tab=repositories"
          target="_blank"
        >
          <button className="button-git">Github</button>
        </a>
      </article>
    </div>
  );
};

export default Projects;
