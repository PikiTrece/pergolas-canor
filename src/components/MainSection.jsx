import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./MainSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";



const MainSection = () => {
  return (
    <Container fluid className="main-section aling-items-center">
      
        <Row className="pre-carousel-center justify-content-center mt-4">
       
          <Col md={6} className="text-center text-white">
            <h1>Pérgolas Canor</h1>
            <h2>Fabricación propia de pérgolas de madera en Murcia y Benissa</h2>
            <h4>
              <em>
                La mejor pérgola al mejor precio. Dinos tu presupuesto, ¡te lo
                mejoramos!
              </em>
            </h4>
            <Button variant="outline-light" as="a" href="/main-section-new-page" className="mb-2 mt-4 btn-custom-size" style={{backgroundColor: '#000', borderColor: '#fff'}}>
              Solicita presupuesto gratis
            </Button>
          </Col>
        </Row> 
    

      <Row className= "carousel-center text-center mt-4  aling-items-center">
        <Col md={6} className="d-flex justify-content-center">
          {/* Carrusel */}
          <Carousel indicators style={{ display: "flex", justifyContent: "center" }}>
            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-28.webp")}
                alt="Pérgola de madera en jardín"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-36.webp")}
                alt="Pérgola instalada en zona de descanso"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-26.webp")}
                alt="Pérgola con diseño moderno"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-18.webp")}
                alt="Pérgola de madera en terraza"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-06.webp")}
                alt="Pérgola de madera en terraza"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-33.webp")}
                alt="Pérgola de madera en terraza"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-09.webp")}
                alt="Pérgola de madera en terraza"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-07.webp")}
                alt="Pérgola de madera en terraza"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block mx-auto carousel-image"
                src={require("./images/img-05.webp")}
                alt="Pérgola de madera en terraza"
              />
            </Carousel.Item>
          </Carousel>
          
        </Col>
          <div align-items-center>
           
              <Button variant="outline-light" as="a" href="/main-section-new-page-2" className="mb-2 mt-4 btn-custom-size ">
                  Visita nuestra galería
              </Button>
           
          </div>  
      </Row>   


     
      
      <br></br>        
      
      <div className="bloque-principal  aling-items-center" color="white">
        <div className="text-center">
          <h3>Nuestros Servicios</h3>
        </div>
        <br></br>

        <Row className="bloque-txt">
          <Col md={4}  >
            <div>
              <h3>Diseño y construcción de pérgolas</h3>
              <p>
                Creamos pérgolas personalizadas para adaptarse a cualquier
                espacio y estilo, utilizando los mejores materiales y técnicas
                de construcción.
              </p>
            </div>  
          </Col>    

          <Col className="d-flex justify-content-end">
            <div>
             <img src={require("./images/img-26.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>
        </Row>

        <Row className="bloque-img">
          <Col>
            <div>
              <img src={require("./images/img-01.jpg")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>

          <Col md={4}>
            <div  >
              <h3>Revestimientos</h3>
              <p>
                Instalamos revestimientos de madera de alta calidad que dan un
                toque de elegancia y calidez a tu hogar.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="bloque-txt ">
          <Col md={4}>
            <div >
              <h3>Cerramientos y tejados</h3>
              <p>
                Creamos cerramientos de madera y pladur a medida que aportan
                privacidad y protección a tu terraza o jardín.
              </p>
            </div>   
          </Col>    

          <Col className="d-flex justify-content-end">
            <div>
              <img src={require("./images/img-33.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>
        </Row>

        <Row className="bloque-img">
          <Col>
            <div>
              <img src={require("./images/img-11.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>

          <Col md={4}>
            <div >
              <h3>Reparación y mantenimiento</h3>
              <p>
                Un mantenimiento adecuado de tu pérgola le prolonga la vida
                útil.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="bloque-txt">
          <Col md={4}>
            <div >
              <h3>Montaje de estructuras</h3>
              <p>¿Tienes tu propia pérgola? Nosotros te la montamos.</p>
            </div>
          </Col>  

          <Col className="d-flex justify-content-end">
            <div>
              <img src={require("./images/img-07.webp")} alt="" style={{ width: "80%", maxWidth: "500px", height: "auto" }}/>
            </div>
          </Col>
        </Row>

      </div>
    </Container>
  );
};

export default MainSection;
