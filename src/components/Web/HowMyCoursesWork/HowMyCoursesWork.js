import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>Web development skills</h2>
        <h3>Tecnologias y conocimientos</h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
        <Col md={8}>
            <CardInfo
              icon="user"
              title="Desarrollador Full Stack"
              description="Desarrollador de Aplicaciones Web 😎"
            />
          </Col>
          <Col md={8}>
            {/* <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" /> */}
            <CardInfo
              // icon="icon-javascrip"
              title="JavaScript"
              description="JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="key"
              title="ReactJs"
              description="React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="message"
              title="Git"
              description="Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="message"
              title="Nodejs"
              description="Lenguaje del servidor basado en el lenguaje de programación JavaScript"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="message"
              title="MongoDB"
              description="es un sistema de base de datos NoSQL, orientado a documentos y de código abierto."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              // icon="user"
              title="Heroku"
              description="Una plataforma como servicio de computación en la Nube que soporta distintos lenguajes de programación."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="dollar"
              title="Cloud"
              description="definiciones, servicios, despliegue, su seguridad y privacidad. Cloud es en realidad sólo una metáfora de Internet."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="check-circle"
              title="Redux"
              description="Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}
