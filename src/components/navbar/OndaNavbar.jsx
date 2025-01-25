import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/navbar.css';

function OndaNavbar() {
  return (
    <Navbar expand="lg" className="onda-navbar fixed-header">
      <Container>
        <Navbar.Brand href="/home" className="navbar-brand">
          Onda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <Nav.Link href="/depoimentos" className="navbar-item">
              Depoimentos
            </Nav.Link>
            <Nav.Link href="/links-uteis" className="navbar-item">
              Links Úteis
            </Nav.Link>
            <Nav.Link href="/servicos-ufba" className="navbar-item">
              Serviços UFBA
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="navbar-item-adm">
              É administrador? Clique aqui.
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default OndaNavbar;
