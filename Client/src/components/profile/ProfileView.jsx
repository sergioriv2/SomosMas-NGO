import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import Button from "../Button";
import PlaceholderImage from "../../images/backoffice/user.png";

export default function ProfileView({ userData, setEditView }) {
  return (
    <Container
      fluid
      style={{ minHeight: "100%" }}
      className="d-flex flex-column"
    >
      <Row className="text-center mt-5">
        <Col>
          <h1>Mi Datos Personales</h1>
        </Col>
      </Row>
      <Row className="m-auto" style={{ minHeight: "500px" }}>
        <Col>
          <Container>
            <Row>
              <Col>
                <Container>
                  <Row>
                    <Col className="d-flex justify-content-center mb-2">
                      <Image
                        roundedCircle
                        src={userData.img || PlaceholderImage}
                        alt="user"
                        style={{
                          width: "120px",
                        }}
                      ></Image>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="mb-3" xs={12}>
                <p className="mb-2">
                  <strong>Nombre</strong>
                </p>
                <p
                  style={{ borderBottom: "1px solid black" }}
                  className="pb-1 m-0"
                >
                  {userData.firstName}
                </p>
              </Col>
              <Col className="mb-3" xs={12}>
                <p className="mb-2">
                  <strong>Apellido</strong>
                </p>
                <p
                  style={{ borderBottom: "1px solid black" }}
                  className="pb-1 m-0"
                >
                  {userData.lastName}
                </p>
              </Col>
              <Col className="mb-3" xs={12}>
                <p className="mb-2">
                  <strong>Email</strong>
                </p>
                <p style={{ color: "gray" }} className="pb-1 m-0">
                  {userData.email}
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-between">
                <Button
                  callbackClick={() => setEditView(true)}
                  styles="secondary px-4"
                >
                  Editar
                </Button>
                <Button styles="primary px-4">Eliminar</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
