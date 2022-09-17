import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Ale védica</h3>
          <p>
            Mediante las técnicas del Chaturkoti de la Ciencia Védica te ayudaré
            a disolver cualquier carga que te impidan desarrollar tu potencial
          </p>
        </Col>
        <Col>
          <h3>Técnicas</h3>
          <ul>
            <li>Lista 18</li>
            <li>Cartas Védicas</li>
            <li>Cartas Védicas Finanzas</li>
          </ul>
        </Col>
        <Col>
          <h3>Si necesitas conversar escríbeme</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="Teléfono" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
