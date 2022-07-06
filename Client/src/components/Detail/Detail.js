import "./Detail.css";

import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
import { Row, Col, Image } from "react-bootstrap";
import Info from "./Info";

const Detail = () => {
  const { id } = useParams();

  const { data: newsInfo, loading } = useFetch(
    process.env.REACT_APP_NEWS_ENDPOINT + "/" + id
  );

  if (loading) {
    return <Loader />;
  }
  return (
    <Row className="title-box">
      <Col>
        <Image
          src={newsInfo.results.image}
          alt="new-detail"
          className="img-title"
        />
      </Col>
      <Col className="px-1 py-5 d-flex">
        <Info name={newsInfo.results.name} content={newsInfo.results.content} />
      </Col>
    </Row>
  );
};

export default Detail;
