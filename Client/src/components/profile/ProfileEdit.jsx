import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";
import ProfileForm from "../Forms/ProfileForm";
import PlaceholderImage from "../../images/backoffice/user.png";

export default function ProfileEdit({ userData, setEditView }) {
  return (
    <Container fluid style={{ minHeight: "100%" }}>
      <Row className="text-center mt-5">
        <Col>
          <h1>Editando Mis Datos Personales</h1>
        </Col>
      </Row>
      <Row>
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
                  <Row className="text-center">
                    <Col>
                      <p>Cambiar imagen de perfil</p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <ProfileForm
              setEditView={setEditView}
              userData={userData}
            ></ProfileForm>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
