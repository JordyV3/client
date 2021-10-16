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
              description="JavaScript para la interaccion con las paginas"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="key"
              title="ReactJs"
              description="Aplicaciones SPA y PWA con ReactJs"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="message"
              title="Git"
              description="Gestor de versiones para mi desarrollo"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="message"
              title="Git"
              description="Gestor de versiones para mi desarrollo"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              // icon="message"
              title="Git"
              description="Gestor de versiones para mi desarrollo"
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Bases de datos"
              description="Base de datos Mysql, Oracle, MongoDb, SQLserver"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Nodejs"
              description="Nodejs para el backend"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="Certificador de finalización"
              description="hajsha"
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
