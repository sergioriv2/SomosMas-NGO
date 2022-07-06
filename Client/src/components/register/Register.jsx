import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../Forms/RegisterForm";

export default function Register() {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <h5 className="m-0">Bienvenido</h5>
          <h3 className="m-0">¡Crea tu usuario!</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
}
