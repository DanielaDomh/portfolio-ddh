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
              <a
                href="https://www.linkedin.com/in/daniela-hern%C3%A1ndez-b96550210/"
                target="_blank"
              >
                <button className="button-link">Linkedln</button>
              </a>
              <a href="https://github.com/DanielaDomh" target="_blank">
                <button className="button-git">Github</button>
              </a>
            </div>
          </div>
        </article>
        <article id="aboutMe">
          <h2>Sobre Mi</h2>
          <div className="about-me">
            <p>
              Hola! mi nombre es Daniela, tengo 22 años y soy Web Developer
              mexicana con una alta capacidad de adaptabilidad y aprendizaje, me
              encantan los retos y manteniendo mis conocimientos en constante
              actualización ofrezco soluciones efectivas a problemas del día a
              día en la industria.
            </p>
            <div className="container-icon">
              <div className="card__wrap">
              <div className="card">
              <p className="icon__html">HTML</p>
              </div>
              </div>
              <div className="card">
              </div>
              <div className="card">
              <p className="icon__css">CSS</p>
              </div>
              <div className="card">
              <p className="icon__js">Javascript</p>
              <img src="JS-icon.png" alt="" />
              </div>
              <div className="card">
              <p className="icon__bs">Bootstrap</p>
              </div>
              <div className="card">
              <p className="icon__rs">React JS</p>
              </div>
            </div>
          </div>
        </article>
        <article id="proyects">
          <h2>Proyectos</h2>
        </article>
        <article id="contact">
          <h2>Contacto</h2>
        </article>
      </section>
    </div>
  );
};

export default Home;
