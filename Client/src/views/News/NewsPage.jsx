import React from "react";
import Loader from "../../components/Loader/Loader";
import NewsSlider from "../../components/Slider/NewsSlider";
import useFetch from "../../hooks/useFetch";
import { Col, Container, Row } from "react-bootstrap";

const NewsPage = () => {
  const { data: newsInfo, loading } = useFetch(
    `${process.env.REACT_APP_NEWS_ENDPOINT}`
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <Container fluid>
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Novedades</h1>
        </Col>
      </Row>
      <Row>
        <NewsSlider newsData={newsInfo.results} />
      </Row>
    </Container>
  );
};

export default NewsPage;
