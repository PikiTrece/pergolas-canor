import React from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import "./MainSectionNewPage3.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const MainSectionNewPage3 = () => {
  return (
    <Container fluid className="main-section-3 aling-items-center">
      
      
      <div className="bloque-principal-3  aling-items-center" >

        <div className="text-center-3" >
          <h2>Sobre nosotros</h2>
        </div>
        <br></br>

        <Row className="bloque-txt-3">
          <Col md={4}  >
            <div>
              <p className="texto-izq"><span className="tick">✔</span>
              Pérgolas Canor es la parte especializada en estructuras y pérgolas de madera de Carpintería Canor,
              con más de 40 años de experiencia en el sector de la madera.
              </p>
            </div>  
          </Col>    

          <Col className="d-flex justify-content-end">
            <div>
             <img src={require("./images/img-22.webp")} alt="" style={{ width: "100%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>
        </Row>

        <Row className="bloque-img-3">
          <Col className="d-flex justify-content-left" >
            <div>
              <img src={require("./images/img-11.webp")} alt="" style={{ width: "100%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>

          <Col md={4}>
            <div>
             
              <p className="texto-der"><span className="tick">✔</span>
              Tenemos un equipo de alta cualificación y un backoffice para hacer realidad aquello que imagines
              y logran una total satisfacción del producto y su instalación final.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="bloque-txt-3 ">
          <Col md={4}>
            <div >
              
              <p className="texto-izq"><span className="tick">✔</span>
              Nos especializamos en la creación de estructuras a medida, como cubiertas, pérgolas,
              cerramientos y revestimientos, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.
              </p>
            </div>   
          </Col>    

          <Col className="d-flex justify-content-end" >
            <div>
              <img src={require("./images/img-39.webp")} alt="" style={{ width: "100%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>
        </Row>

        <Row className="bloque-img-3">
          <Col className="d-flex justify-content-left" >
            <div>
              <img src={require("./images/img-40.webp")} alt="" style={{ width: "100%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>

          <Col md={4}>
            <div >
              
              <p className="texto-der"><span className="tick">✔</span>
              Contamos con un equipo de profesionales altamente cualificados y responsables.
              Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default MainSectionNewPage3;