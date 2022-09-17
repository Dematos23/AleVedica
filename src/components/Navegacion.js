import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function Navegacion() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Ale Védica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="testimonios">Testimonios</Nav.Link>
            <Nav.Link href="eresapta">¿Eres Apta?</Nav.Link>
            <NavDropdown title="Tecnicas" id="basic-nav-dropdown">
              <NavDropdown.Item href="lista18">Lista 18</NavDropdown.Item>
              <NavDropdown.Item href="cartasvedicas">
                Cartas Védicas
              </NavDropdown.Item>
              <NavDropdown.Item href="cartasvedicasfinanzas">
                Cartas Védicas Finanzas
              </NavDropdown.Item>
            </NavDropdown>
            <Button as="a" href="cita" variant="success">
              Agenda tu cita
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
