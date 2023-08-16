import React from "react";
import Typewriter from "typewriter-effect";

const Presentation = () => {
  return (
      <div className="card-presentation">
        <div>
          <Typewriter
            options={{
              strings: ["Hola! ", "Hi! ", "Aloha! ", "Bonjour! "],
              autoStart: true,
              loop: true,
            }}
          />
          <h1>Soy Daniela Domínguez</h1>
        </div>
        <p className="developer">Desarrolladora Web Full Stack</p>
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
          <a
            href="./public/CV_Daniela_Domínguez.pdf"
            download={"CV_Daniela_Domínguez.pdf"}
          >
            <button>Descargar CV</button>
          </a>
        </div>
      </div>
  );
};

export default Presentation;
