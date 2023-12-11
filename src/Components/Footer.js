import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterLogo from "../Assets/images/footerlogo.png";
import { Link } from "react-router-dom";
import {
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <Container>
        <Row className="p-2 mt-3">
          <Col xs={6} md={3} className="mb-3">
            <img
              src={FooterLogo}
              alt="Logo"
              className="mw-100 footer-logo mt-2"
            />
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <h2>Quick Links</h2>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/order-online">Order Online</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <h2>Contact Us</h2>
            <h4>Address:</h4>
            <address className="fs-6 c-main">
              Chicago Little Lemon St. 12
            </address>
            <h4>Phone Number:</h4>
            <p className="fs-6 c-main">0-(000)-000-000</p>
            <h4>Email:</h4>
            <p className="fs-6 c-main">info@littlelemon.com</p>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <h2>Follow us on Social:</h2>
            <ul className="footer-links">
              <li>
                <a href="https://Facebook.com" target="_blank" rel="noreferrer">
                  <FaSquareFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://Youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube />
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://Instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://Pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPinterest />
                  Pinterest
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
