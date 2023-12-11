import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiEBike2Fill } from "react-icons/ri";
import Greek from "../Assets/images/greek salad.jpg";
import Bruchetta from "../Assets/images/bruchetta.svg";
import Lemon from "../Assets/images/lemon dessert.jpg";
export default function Specials() {
  return (
    <>
      <Container className="specials">
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Col xs={6} sm={8}>
            <h1>This Weeks Specials</h1>
          </Col>
          <Col xs={6} sm={4} className="text-end">
            <Link to="menu">
              <button className="mainBtn cta">Online Menu</button>
            </Link>
          </Col>
        </Row>
        <section className="cards">
          <div className="card">
            <div className="card-image">
              <img src={Greek} className="card-img" alt="/" />
            </div>

            <div className="card-text">
              <h1 className="card-title fs-3">
                Greek Salad <span className="price c-orange">$12.99</span>
              </h1>
              <p className="fs-6">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with garlic and
                rosemary croutons.
              </p>
              <Link to="/order-online">
                <button className="mainBtn">
                  Order a delivery <RiEBike2Fill />
                </button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={Bruchetta} className="card-img" alt="/" />
            </div>

            <div className="card-text">
              <h1 className="card-title fs-3">
                Bruchetta <span className="price c-orange">$5.99</span>
              </h1>
              <p className="fs-6">
                Our Bruschetta is made from grilled sourdough bread that has
                been smeared with garlic and seasoned with salt and olive oil.
              </p>
              <Link to="/order-online">
                <button className="mainBtn">
                  Order a delivery <RiEBike2Fill />
                </button>
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={Lemon} className="card-img" alt="/" />
            </div>

            <div className="card-text">
              <h1 className="card-title fs-3">
                Lemon Dessert <span className="price c-orange">$5.00</span>
              </h1>
              <p className="fs-6">
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <Link to="/order-online">
                <button className="mainBtn">
                  Order a delivery <RiEBike2Fill />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
