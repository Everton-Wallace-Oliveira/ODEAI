import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/global.css'; // Certifique-se de importar o arquivo CSS

function OndaNavbar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">Onda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-item">
                        <Nav.Link href="#home" className="navbar-item">Depoimentos</Nav.Link>
                        <Nav.Link href="#link" className="navbar-item">Links Úteis</Nav.Link>
                        <Nav.Link href="#link" className="navbar-item">Serviços UFBA</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default OndaNavbar;