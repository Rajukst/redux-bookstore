import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Discover from "../Pages/Discover/Discover";
import Finished from "../Pages/Finished/Finished";
import Reading from "../Pages/Reading/Reading";
import "./Nested.css"
const Nested = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={2} lg={2}>
          <Link to="app">
        <button className="mt-2 my-buttons">Discover (0)</button>
      </Link>
      <Link to="user">
        <button className="mt-2 my-buttons">Reading (0)</button>
      </Link>
      <Link to="products">
        <button className="mt-2 my-buttons">Finished (0)</button>
      </Link>
          </Col>
          <Col  xs={12} md={10} lg={10}>

          <Routes>
          <Route path="app" element={<Discover />} />
          <Route path="user" element={<Reading />} />
          <Route path="products" element={<Finished />} />
        </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nested;
