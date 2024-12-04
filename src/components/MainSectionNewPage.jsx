import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './MainSectionNewPage.css';



const MainSectionNewPage = () => {
  return (
    <Container fluid className="main-section-newpage">
      <Row className= "fila-txt-form ">
        <Col md={6} className="bloque-texto1">
          
            <h2>Atención personalizada</h2>
            <ul>
              <li><span className="tick">✔</span>Contamos con un equipo de profesionales altamente cualificados y responsables.</li>
              <li><span className="tick">✔</span>Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</li>
            </ul>
          
        </Col>
        <Col md={6} >
          <Form className="cuestionario">
            <Form.Group>
              <Form.Label className="mt-3 mb-1">Nombre y apellidos (obligatorio)</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3 mb-1">Correo electrónico (obligatorio)</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3 mb-1">Teléfono (obligatorio)</Form.Label>
              <Form.Control type="tel" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3 mb-1">Población (obligatorio)</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3 mb-1">Dinos qué necesitas</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="outline-light mb-2 mt-4" className="flex-grow-1 me-2 button-margin" style={{ marginRight: '10px' }}>
                Contáctanos
              </Button>
          </Form>
        </Col>
      </Row>
      <Row className="maps-section aling-items-center" >
        <Col>
          <iframe
            title="Mapa Murcia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.9930354045814!2d-1.1161606000000002!3d37.97392740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6383a13b175091%3A0x25981e1d829e7e26!2sPergolas%20Canor!5e1!3m2!1ses!2ses!4v1731319537393!5m2!1ses!2ses&zoomControl=false&scrollwheel=true"
            width="700px"
            height="500px"
            aria-label="Mapa de ubicación en Murcia"
          />
          <p> <a
                href="https://www.google.com/maps/place/Pergolas+Canor/@37.974165,-1.1187959,576m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd6383a13b175091:0x25981e1d829e7e26!8m2!3d37.974165!4d-1.116221!16s%2Fg%2F11y4szfng6?entry=tts&g_ep=EgoyMDI0MDUyOS4wKgBIAVAD"
                className="text-light"> </a>
                Calle Naranjo, Murcia, Murcia (30011)
          </p>
        </Col>
        <Col>
          <iframe
            title="Mapa Benissa"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3830.243568274328!2d0.0555!3d38.72164600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQzJzE3LjkiTiAwwrAwMycxOS44IkU!5e1!3m2!1ses!2ses!4v1731319734330!5m2!1ses!2ses&zoomControl=false&scrollwheel=true"
            width="700px"
            height="500px"
            aria-label="Mapa de ubicación en Benissa"
          />
          <p>Camino Viejo de Valencia s/n, Benissa, Alicante (03720)</p>
        </Col>
      </Row>

      <Row className="bloque-3 mt-4 mb-2">
        <p>
        Pérgolas Canor, te informa sobre su Política de Privacidad respecto del tratamiento
        y protección de los datos de carácter personal de los usuarios y clientes que puedan 
        ser recabados por la navegación o contratación de servicios a través del sitio Web http://www.pergolascanor.es
        </p>
        <br></br>
        <p>
        En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, 
        reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de 
        Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 
        27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
        </p>
        <br></br>
        <p>
        El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.
        </p>
      </Row>
    </Container>
  );
};

export default MainSectionNewPage;
