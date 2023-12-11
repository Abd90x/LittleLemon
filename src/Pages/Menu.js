import React from "react";
import Item from "../Components/Item";
import { menuItems } from "../Data/menuItems";
import { Col, Container, Row } from "react-bootstrap";
export default function Menu() {
  return (
    <Container className="mt-5 mb-5">
      {menuItems.menu.map((e, index) => {
        return (
          <div key={index}>
            <h1 className="category">{e.category}</h1>
            <Row className="justify-content-center align-items-center">
              {e.items.map((item, index) => {
                return (
                  <Col xs={12} sm={6} md={3} key={index}>
                    <Item
                      name={item.name}
                      img={item.image}
                      price={item.price}
                      desription={item.description}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        );
      })}
    </Container>
  );
}
