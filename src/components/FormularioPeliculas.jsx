import { useState } from "react";
import { Form, Row, Button, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function FormularioPeliculas({ nuevaPelicula }) {
  const [validated, setValidated] = useState(false);
  const [pelicula, setPelicula] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });

  const { nombre, descripcion } = pelicula;

  const handleChange = (e) => {
    setPelicula({
      ...pelicula,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      event.stopPropagation();
      setValidated(false);
      pelicula.id = uuidv4();
      nuevaPelicula(pelicula);
      Swal.fire({
        icon: "success",
        title: "Película subida correctamente",
        showConfirmButton: false,
        timer: 2000,
      });
      setPelicula({
        nombre: "",
        descripcion: "",
        genero: "",
      });
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "No se pudo cargar su película.",
      });
    }
  };

  return (
    <Card className="container">
      <Card.Header className="bg-white text-center py-3" as="h6">
        Llenar el formulario para crear una Pelicula
      </Card.Header>
      <Form
        className="p-4 bg-celeste "
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ borderRadius: "10px" }}
      >
        <Row className="mb-3">
          <Form.Group controlId="validationCustom01">
            <Form.Label className=" my-2 h6">Nombre de Pelicula</Form.Label>
            <Form.Control
              name="nombre"
              required
              type="text"
              placeholder="ingresar el nombre de la pelicula"
              onChange={handleChange}
              value={nombre}
            />
          </Form.Group>
          <Form.Group className="py-2" controlId="validationCustom02">
            <Form.Label className=" my-2 me-2 h6">Descripción</Form.Label>
            <Form.Control
              name="descripcion"
              required
              type="text"
              placeholder="ingresar una descripción de la pelicula"
              onChange={handleChange}
              value={descripcion}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Label className=" my-2 me-2 h6">Selección de Genero</Form.Label>
          <Form.Select className="my-2" name="genero" onChange={handleChange}>
            <option value="comedia">comedia</option>
            <option value="drama">drama</option>
            <option value="infantil">infantil</option>
          </Form.Select>
        </Row>
        <Card.Footer className="text-center bg-light pt-4">
          <Button className="text-white" variant="info" type="submit">
            <FontAwesomeIcon icon={faPlusCircle} /> Agregar nueva Pelicula
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
}
