import React from "react";
import "./newsSlide.css";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button";

//Librería
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Image, Row } from "react-bootstrap";

const NewsSlider = ({ newsData }) => {
  const navigate = useNavigate();
  if (!Array.isArray(newsData) || !newsData.length >= 1)
    return <p>Loading...</p>;

  return (
    <Carousel
      variant="dark"
      style={{ display: "block", width: "100%" }}
      className="carouselNew"
    >
      {newsData.map((item) => {
        const splittedContent =
          item.content.split("</p>")[0].split(".")[0] + "...</p>";
        return (
          <Carousel.Item className="carousel-item" key={item.id}>
            <Image src={item.image} alt={item.name} />
            <Carousel.Caption>
              <Container>
                <Row>
                  <Col>
                    <h3 className="mb-2 carousel-item__title">{item.name}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    dangerouslySetInnerHTML={{
                      __html: splittedContent,
                    }}
                    className="text-left content-container"
                  ></Col>
                </Row>
                <Row>
                  <Col>
                    <ButtonComponent
                      className="btn-news"
                      callbackClick={() => navigate("/news/" + item.id)}
                    >
                      Ver más
                    </ButtonComponent>
                  </Col>
                </Row>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default NewsSlider;
