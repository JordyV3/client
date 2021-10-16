import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Jordy Vega <br/> Desarrollador Web 👨🏻‍💻.
          </h2>
          <h3>
             Siempre estoy haciendo cosas de desarrollo web{" "}
            <br />
            tratando de aprender cosas nuevas. Javascript, nodejs y fan de React JS.
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
