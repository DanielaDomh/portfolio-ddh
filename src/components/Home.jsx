import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <section>
        <article id="home">
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
        </article>
        <article id="aboutMe" className="aboutme">
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

          <div className="content">
            <div>
              <img src="JSLOGO.png" alt="" />
              <div className="title-box"></div>
              <div className="title">JavaScript</div>
            </div>
            <div>
              <img src="LOGOHTML.png" alt="" />
              <div className="title-box"></div>
              <div className="title">HTML</div>
            </div>
            <div>
              <img src="LOGOCSS.png" alt="" />
              <div className="title-box"></div>
              <div className="title">CSS</div>
            </div>
            <div>
              <img src="BSLOGO.jpeg" alt="" />
              <div className="title-box"></div>
              <div className="title">BOOTSTRAP</div>
            </div>
            <div>
              <img src="LOGOREACT.png" alt="" />
              <div className="title-box"></div>
              <div className="title">REACT</div>
            </div>
            <div>
              <img src="LOGOPSQL.png" alt="" />
              <div className="title-box"></div>
              <div className="title">PostgreSQL</div>
            </div>
            <div>
              <img src="LOGONODE.png" alt="" />
              <div className="title-box"></div>
              <div className="title">NODE JS & Express</div>
            </div>
            <div>
              <img src="LOGOGIT.png" alt="" />
              <div className="title-box"></div>
              <div className="title">GIT</div>
            </div>
          </div>
          <a href="./public/CV_Daniela_Domínguez.pdf" download={"CV_Daniela_Domínguez.pdf"}>
            <button>Descargar CV</button>
          </a>
        </article>

        <article id="proyects" className="projects">
          <h2>Algunos proyectos</h2>
          <div className="projectContainer">
          </div>

          <article class="card">
          <a href="https://funny-treacle-3e8185.netlify.app/" target="_blank">
            <img className="card__image" src="CRUD.png"/>
              <div className="card__content">
                <h2 className="card__title">CRUD USERS</h2>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum in labore laudantium deserunt fugiat numquam.
                </p>
              </div>
            </a>
          </article>

          <article class="card">
          <a
                href="https://rickandmorty-characters-ddh.netlify.app/"
                target="_blank"
              >
            <img
              className="card__image"
              src="RICKANDMORTY.png"
            />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h2 class="card__title">R&M Characters</h2>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum in labore laudantium deserunt fugiat numquam.
                </p>
              </div>
            </div>
            </a>
          </article>

          <article class="card">
          <a
                href="https://strong-gumdrop-d31ba8.netlify.app/#/"
                target="_blank"
              >
            <img
             className="card__image"
              src="POKEDEX.png"
            />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h2 class="card__title">Pokedex</h2>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum in labore laudantium deserunt fugiat numquam.
                </p>
              </div>
            </div>
            </a>
          </article>

          <article class="card">
          <a href="https://e-commerce-gen25-g2.netlify.app/"
                target="_blank" >
            <img className="card__image" src="ECOMERCE.png" />
            <div class="card__content | flow">
              <div class="card__content--container | flow">
                <h2 class="card__title">Ecommerce</h2>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum in labore laudantium deserunt fugiat numquam.
                </p>
              </div>
            </div>
            </a>
          </article>

          <a
            href="https://github.com/DanielaDomh?tab=repositories"
            target="_blank"
          >
            <button className="button-git">Github</button>
          </a>

        </article>



        <article id="contact" className="contact">
          <h2>Pongamonos en contacto!</h2>
          <p>Correo</p>
          <p>danieladoher@gmail.com</p>
          <form action="" className="form">
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
