import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

import TestimonyCard from "../../components/CardList/TestimonyCard";
import useFetch from "../../hooks/useFetch";

const TestimoniesPage = () => {
  const { data, loading } = useFetch(
    process.env.REACT_APP_TESTIMONIALS_ENDPOINT
  );

  if (loading) return <Spinner></Spinner>;

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-5">Testimonios</h1>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-md-start">
        {data.results.map((card) => (
          <TestimonyCard key={card.name} cardData={card}></TestimonyCard>
        ))}
      </Row>
    </Container>
  );
};

export default TestimoniesPage;
