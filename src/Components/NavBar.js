import React, { useState } from "react";
import Logo from "../Assets/images/Logo.svg";
import { Container, Nav, NavLink, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const location = useLocation();
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            <img className="nav-logo" src={Logo} alt="Lettle Lemon Logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            onClick={() => setIsShow(true)}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            show={isShow}
          >
            <Offcanvas.Header>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Navbar.Brand to="/" as={Link} onClick={handleClose}>
                  <img
                    className="nav-logo"
                    src={Logo}
                    alt="Lettle Lemon Logo"
                  />
                </Navbar.Brand>
              </Offcanvas.Title>
              <IoClose
                size={35}
                onClick={handleClose}
                className="c-main"
                role="button"
              />
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                activeKey={location.pathname}
                defaultActiveKey="/"
                variant="underline"
              >
                <NavLink
                  onClick={handleClose}
                  eventKey="/"
                  to="/"
                  className="cta"
                  as={Link}
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={handleClose}
                  eventKey="/about"
                  to="about"
                  className="cta"
                  as={Link}
                >
                  About
                </NavLink>
                <NavLink
                  onClick={handleClose}
                  eventKey="/menu"
                  to="menu"
                  className="cta"
                  as={Link}
                >
                  Menu
                </NavLink>
                <NavLink
                  onClick={handleClose}
                  eventKey="/reservations"
                  to="reservations"
                  className="cta"
                  as={Link}
                >
                  Reservations
                </NavLink>
                <NavLink
                  onClick={handleClose}
                  eventKey="/order-online"
                  to="order-online"
                  className="cta"
                  as={Link}
                >
                  Order Online
                </NavLink>
                <NavLink
                  onClick={handleClose}
                  eventKey="/login"
                  to="login"
                  className="cta"
                  as={Link}
                >
                  Login
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
