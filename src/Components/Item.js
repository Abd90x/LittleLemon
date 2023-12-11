import React, { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logo from "../Assets/images/Logo.svg";
export default function Item(props) {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="item-box mb-3">
        <div className="item-img">
          <img src={props.img} alt={props.name} className="mw-100" />
        </div>
        <div className="item-text ">
          <div className="item-title mb-2">
            <h2 className="fs-5 m-0">{props.name}</h2>
            <p className="price m-0">${props.price}</p>
          </div>
          <p className="description">{props.desription}</p>
          <span className="mainBtn" onClick={handleShow}>
            Order Now
          </span>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-yellow">
          <Modal.Title>Order Submition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img src={props.img} alt={props.name} className="mw-100" />
            </Col>
            <Col>
              <h2>{props.name}</h2>
              <p>{props.desription}</p>
              <h3 className="c-orange">${props.price}</h3>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="bg-yellow">
          <Button variant="outline-dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              handleClose();
              setConfirm(true);
            }}
          >
            Order Now
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={confirm} onHide={handleClose}>
        <Modal.Header closeButton className="bg-yellow">
          <Modal.Title>Thank You For Order From Little Lemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="text-center">
              <img src={Logo} alt="Little Lemon Logo" className="w-50 mb-3" />
              <div class="success-checkmark ">
                <div class="check-icon">
                  <span class="icon-line line-tip"></span>
                  <span class="icon-line line-long"></span>
                  <div class="icon-circle"></div>
                  <div class="icon-fix"></div>
                </div>
              </div>
              <h4>Thank You For Order From Little Lemon Restaurant</h4>
              <p>Your Order Has Been Placed Successfully</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="bg-yellow">
          <Button variant="dark" onClick={() => setConfirm(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
