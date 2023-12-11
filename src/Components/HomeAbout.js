import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../Assets/images/Mario and Adrian A.jpg";
import Img2 from "../Assets/images/Mario and Adrian b.jpg";
export default function HomeAbout() {
  return (
    <Container>
      <Row className="about-home align-items-center">
        <Col xs={12} sm={6}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
        </Col>
        <Col xs={12} sm={6}>
          <div className="images position-relative">
            <div className="image position-absolute">
              <img src={Img1} alt=" " className="mw-100" />
            </div>
            <div className="image position-absolute top-0 left-0">
              <img src={Img2} alt=" " className="mw-100" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
