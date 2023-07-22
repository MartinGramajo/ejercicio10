import { useEffect, useState } from "react";
import "./App.css";
import FormularioPeliculas from "./components/FormularioPeliculas";

function App() {
  let peliculasIniciales = JSON.parse(localStorage.getItem("peliculas"));
  if (!peliculasIniciales) {
    peliculasIniciales = [];
  }
  const [peliculas, setPeliculas] = useState(peliculasIniciales);

  useEffect(() => {
    if (peliculasIniciales) {
      localStorage.setItem("peliculas", JSON.stringify(peliculas));
    } else {
      localStorage.setItem("peliculas", JSON.stringify([]));
    }
  }, [peliculas]);

  const nuevaPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <section>
        <h1 className="text-center py-5 display-6">
          Administrador de Películas
        </h1>
      </section>
      <section>
        <FormularioPeliculas nuevaPelicula={nuevaPelicula} />
      </section>
      <section></section>
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
