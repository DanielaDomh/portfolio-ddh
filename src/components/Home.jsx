import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        <article id="home">
          <img className="element" src="3delement.png" alt="" />
          <div className="card-presentation">
            <h1>Hola! 👋🏻 Soy Daniela Domínguez</h1>
            <p>Desarrolladora Web Full Stack especializado en Front End</p>
            <div>
              <a href="https://www.linkedin.com/in/daniela-hern%C3%A1ndez-b96550210/" target="_blank">
                <button className="button-link">Linkedln</button>
              </a>
              <a href="https://github.com/DanielaDomh" target="_blank">
              <button className="button-git">Github</button>
              </a>
            </div>
          </div>
        </article>
        <article id="aboutMe">
          <div>
            <p>Sobre Mi</p>
            <p>
              Hola mi nombre es Daniela, tengo 22 años y soy Web Developer con
              una alta capacidad de adaptabilidad y aprendizaje, me encantan los
              retos y manteniendo mis conocimientos en constante actualización
              ofrezco soluciones efectivas a problemas del día a día.
            </p>
          </div>
        </article>
        <article id="proyects">
          <p>Proyectos</p>
        </article>
        <article id="contact">
          <p>Contacto</p>
        </article>
      </section>
    </div>
  );
};

export default Home;
