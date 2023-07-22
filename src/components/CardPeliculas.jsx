import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default function CardPeliculas({ pelicula, borrarPelicula }) {
  const { nombre, descripcion, genero } = pelicula;

  return (
    <Card className="container my-5 cita-carta">
      <Card.Header className="d-flex justify-content-between py-4">
        <div>
          <h6>Película </h6>
          <strong>{nombre}</strong>
        </div>
        <div>
          <h6>
            Genero: <strong>{genero}</strong>{" "}
          </h6>
        </div>
      </Card.Header>
      <Card.Body className="py-5 bg-celeste">
        <h6>Descripción</h6>
        {descripcion}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center py-4">
        <Button
          variant="danger"
          size="lg"
          onClick={() => borrarPelicula(pelicula.id)}
        >
          <FontAwesomeIcon icon={faMinusCircle} /> Borrar Película
        </Button>
      </Card.Footer>
    </Card>
  );
}
