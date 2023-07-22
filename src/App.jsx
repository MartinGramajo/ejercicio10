import { useEffect, useState } from "react";
import "./App.css";
import FormularioPeliculas from "./components/FormularioPeliculas";
import CardPeliculas from "./components/CardPeliculas";
import Swal from "sweetalert2";

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

  const borrarPelicula = (id) => {
    Swal.fire({
      title: "Estas seguro que quieres borrar la pelicula?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `no`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Pelicula borrada con éxito", "", "success");
        const nuevasPeliculas = peliculas.filter(
          (pelicula) => pelicula.id !== id
        );
        if (peliculas.id !== id) {
          setPeliculas(nuevasPeliculas);
        }
      } else if (result.isDenied) {
        Swal.fire("No se borro la pelicula ✅", "", "info");
      }
    });
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
      <section>
        <div className="py-5 text-center">
          {peliculas.length === 0 ? (
            <div className="text-center text-white pt-5">
              <h5> No hay Peliculas!</h5>
            </div>
          ) : (
            <div className="container d-flex flex-wrap justify-content-around">
              {peliculas.map((pelicula) => (
                <CardPeliculas
                  key={pelicula.id}
                  pelicula={pelicula}
                  borrarPelicula={borrarPelicula}
                />
              ))}
            </div>
          )}
        </div>
      </section>
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
