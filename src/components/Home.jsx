import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        <article id="home">
          <div className="card-presentation">
            <img className="element" src="3delement.png" alt="" />
            <p>Hola! 👋🏻 Soy Daniela Domínguez</p>
            <p>Desarrolladora Web Full Stack especializado en Front End</p>
            <button>Linkedln</button>
            <button>Github</button>
          </div>
<br /> <br /><br /><br /><br /><br /><br /><br /><br />
        </article>
        <article id="aboutMe">
          <p>Sobre Mi</p>
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
