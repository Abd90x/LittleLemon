import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Login() {
  return (
    <Container className="login">
      <Form className="login-form mt-5 mb-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-4">Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remmember Me" />
        </Form.Group>
        <button className="mainBtn-hero m-auto d-block" type="submit">
          Login
        </button>
      </Form>
    </Container>
  );
}
