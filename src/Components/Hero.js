import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import HeroImage from "../Assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <section className="bg-main">
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col sm={6}>
              <h1 className="sub-title c-yellow m-0">Little Lemon</h1>
              <h3 className="text-white fs-1 m-0">Chicago</h3>
              <p className="text-white">
                We are a family owned Mediterranean restaurant, located on
                Maldove Street in Chicago, Illionis. We focus on traditional
                recipes served with a modern twist.
              </p>
              <Link to="/reservations">
                <button className="mainBtn-hero cta">Reserve a Table</button>
              </Link>
            </Col>
            <Col sm={6} className="position-relative">
              <div className="hero-img ">
                <Image
                  src={HeroImage}
                  alt="Hero"
                  className="mw-100"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
