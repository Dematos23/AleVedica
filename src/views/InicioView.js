import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export default function Inicio() {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/NLj2Asb.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button as="a" href="cita" variant="success">
              Agenda tu cita
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/JLhk9SB.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button as="a" href="cita" variant="success">
              Agenda tu cita
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <div>Depresión</div>
        <div>No sé cuál es mi camino</div>
        <div>No disfruto de la vida</div>
      </div>
    </div>
  );
}
