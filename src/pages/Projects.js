import React from 'react'
import { Row, Col, Card, Button } from "antd";
import Firegram from "../assets/img/jpg/firegramXYz.png";
import react from "../assets/img/jpg/crypto-tracker.png";
import redux from "../assets/img/jpg/jordyvega3.png";
import pwa from "../assets/img/jpg/pizza-italiana-pwa.png";
import registro_vacunacion from "../assets/img/jpg/covid-registro-PWA.png";
import covid_tracker from "../assets/img/jpg/covid-tracker.png";
import loschapines from "../assets/img/jpg/los-chapines.png";

// import "./HomeCourses.scss";

export default function(){
  return (
    <div>
      <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Projectos</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={Firegram}
              title="Firegram"
              subtitle="Intermedio - React/JavaScript"
              link="https://firegram-eight.vercel.app/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={react}
              title="Crypto Tracker"
              subtitle="Intermedio - React/JavaScript"
              link="https://crypto-curren-9ife8wkwh-jordyvega.vercel.app/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={redux}
              title="Redux - JavaScript"
              subtitle="Básico - JavaScript"
              link="https://jordyve3.xyz/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={pwa}
              title="PWA - React"
              subtitle="Avanzado - React"
              link="https://pizza-jordy-vega.netlify.app/"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={registro_vacunacion}
              title="Registro Vacunacion PWA"
              subtitle="Básico - React js"
              link="https://covid-19-jordyvega.netlify.app/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={covid_tracker}
              title="HTML, CSS, JavaScript"
              subtitle="Intermedio - CSS"
              link="https://jordyv3.github.io/covid-tracker/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={loschapines}
              title="PHP, CSS, MYSQL"
              subtitle="Avanzado - PHP y MYSQL"
              link="http://loschapines.online/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
    </div>
  )
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}