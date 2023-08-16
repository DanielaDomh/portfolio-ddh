import "./App.css";
import NavBar from "./components/NavBar";
import Technologies from "./components/Technologies";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <section>
          <article>
            <NavBar/>
          </article>
          <article id="home"> 
            <Presentation/>
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
          <Technologies/>
          <a href="./public/CV_Daniela_Domínguez.pdf" download={"CV_Daniela_Domínguez.pdf"}>
            <button>Descargar CV</button>
          </a>
        </article>
        <article>
          <Projects/>
        </article>
        <article>
          <Contact/>
        </article>
      </section>
    </div>
  );
}

export default App;
