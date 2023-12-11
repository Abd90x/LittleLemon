import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import P1 from "../Assets/images/people1.png";
import P2 from "../Assets/images/people2.png";
import P3 from "../Assets/images/people3.png";
import P4 from "../Assets/images/people4.png";

export default function Testimonials() {
  return (
    <section className="testimonials bg-main mt-5 p-4">
      <Container>
        <h1 className="text-white text-center text-capitalize mb-5">
          what people talk about us
        </h1>
        <Row className="boxes  justify-content-center">
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className=" box bg-white p-3 rounded">
              <div className="box-head pb-3 border-bottom mb-3 d-flex justify-content-start align-items-center">
                <div className="avatar">
                  <img src={P1} alt="John" className="mw-100 rounded-circle " />
                </div>
                <h2 className="ms-2">John</h2>
              </div>
              <div className="text">
                <h4>"A Taste of Perfection!"</h4>
                <p className="fs-6 ">
                  John and his friends had an incredible time at Little Lemon!
                  The cozy setting and impeccable service made their evening
                  memorable.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className=" box bg-white p-3 rounded">
              <div className="box-head pb-3 border-bottom mb-3 d-flex justify-content-start align-items-center">
                <div className="avatar">
                  <img src={P2} alt="John" className="mw-100 rounded-circle " />
                </div>
                <h2 className="ms-2">Sarah</h2>
              </div>
              <div className="text">
                <h4>"A Culinary Haven!"</h4>
                <p className="fs-6">
                  Sarah's experience at Little Lemon was absolutely delightful!
                  From the warm ambiance to the flavorful dishes, every aspect
                  was top-notch.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2">
            <div className="box bg-white p-3 rounded">
              <div className="box-head pb-3 border-bottom mb-3 d-flex justify-content-start align-items-center">
                <div className="avatar">
                  <img src={P3} alt="John" className="mw-100 rounded-circle " />
                </div>
                <h2 className="ms-2">Emma</h2>
              </div>
              <div className="text">
                <h4>"Sophisticated Dining Paradise!"</h4>
                <p className="fs-6">
                  Emma couldn't stop raving about her experience at Little
                  Lemon! The sophisticated ambiance and exquisite dishes made
                  her visit extraordinary.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-2 ">
            <div className=" box bg-white p-3 rounded">
              <div className="box-head pb-3 border-bottom mb-3 d-flex justify-content-start align-items-center">
                <div className="avatar">
                  <img
                    src={P4}
                    alt="Michael"
                    className="mw-100 rounded-circle "
                  />
                </div>
                <h2 className="ms-2">Michael</h2>
              </div>
              <div className="text">
                <h4>"Exquisite Culinary Escape!"</h4>
                <p className="fs-6">
                  Michael's visit to Little Lemon was an exquisite culinary
                  escape! The atmosphere, combined with the attentive service,
                  set the stage for an unforgettable evening.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
