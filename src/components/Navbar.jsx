import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import './Header.css'; 
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
          <Container className="d-flex align-items-center justify-content-between">
              <Navbar.Brand href="/" className="d-flex align-items-center" style={{ textDecoration: "none" }}>
               <Link to="/"> {/* Envolvemos el logo en un Link */}
                <img 
                  src={require("./images/logo.webp")} 
                  alt="" 
                  style={{ width: "100px", height: "auto", textAlign: "left" }}
                />
               </Link>  
                <span className="ms-2">Pérgolas Canor</span>
              </Navbar.Brand>
            

          {/* Bloque del menú */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="text-center">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/main-section-new-page-2">Galería</Nav.Link>
              <Nav.Link href="/main-section-new-page-3">Nosotros</Nav.Link>
              <Nav.Link href="/main-section-new-page">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
            
        {/* Bloque de botones y redes sociales */}
        <div className="d-flex flex-column align-items-center"> 
          <div className="d-flex mb-2"> 
            <a href="https://web.whatsapp.com/" className="whatsapp-icon me-2">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/PergolasCanor" className="facebook-icon me-2">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/PergolasCanor" className="instagram-icon">
              <FaInstagram />
            </a>
          </div>

          <div className="d-flex w-100 mb-2">
            <Link to="/main-section-new-page"> {/* Ruta hacia la nueva página */}
              <Button variant="outline-light" className="flex-grow-1 me-2 button-margin" style={{ marginRight: '10px' }}>
                Solicita tu presupuesto
              </Button>
            </Link>
            <Button variant="outline-light" className="flex-grow-1 button-margin">
              Llámame 614306304
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
