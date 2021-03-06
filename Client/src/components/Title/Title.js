import React from "react";

import { Row, Col, Container, Image } from "react-bootstrap";
import Text from "./Text";
import "./Title.css";

const Title = (props) => {
  const { title, text, image } = props;
  return (
    <Container className="my-5 welcomeContainer" fluid>
      <Row>
        <Col className="my-lg-auto" xs={12} lg={6}>
          <Text title={title} text={text} />
        </Col>
        <Col
          xs={12}
          lg={6}
          md={4}
          className="d-none d-lg-flex justify-content-end"
        >
          <Image
            className="welcomeImage"
            src={image}
            alt="SomosMasWelcome"
            loading="lazy"
          ></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
