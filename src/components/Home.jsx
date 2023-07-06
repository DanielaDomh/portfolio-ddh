import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        <article id="home">
          <div className="card-presentation">
            <h1>Hola! 👋🏻 Soy Daniela Domínguez</h1>
            <p>Desarrolladora Web Full Stack</p>
            <div>
              <a href="https://www.linkedin.com/in/daniela-hern%C3%A1ndez-b96550210/"
                target="_blank" >
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
              ¡Hola! Soy Dani, tengo 22 años y soy Web Developer mexicana con
              una alta capacidad de adaptabilidad y aprendizaje, me encantan los
              retos, los puzzles y los rompecabezas. Descubrí mi pasión por el
              diseño y la programación así que me encuentro constantemente
              aprendiendo cosas nuevas dentro de la industria.
            </p>
          </div>
          <div className="container-icon">
              <p>JAVASCRIPT (ES6+)</p>
              <p>React</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstrap</p>
              <p>Node JS</p>
              <p>Express</p>
              <p>PostGress</p>
              <p>Git</p>
              <p>GituHub</p>
        </div>
            <button>Descargar CV</button>
        </article>
        <article id="proyects">
          <h2>Algunos proyectos</h2>
          <a href="https://github.com/DanielaDomh?tab=repositories"
            target="_blank" >
            <button className="button-git">Github</button>
          </a>
        </article>
        <article id="contact">
          <h2>Pongamonos en contacto!</h2>
          <p>Correo</p>
          <p>danieladoher@gmail.com</p>
          <form action="">
            <label htmlFor="" />
            <input type="text" placeholder="Nombre" />
            <label htmlFor="" />
            <input type="text" placeholder="Email" />
            <label htmlFor="" />
            <input type="text" placeholder="Mensaje" />
            <button>Enviar</button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Home;
