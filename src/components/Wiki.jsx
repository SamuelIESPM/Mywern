import React, { Fragment } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./Wiki.css";

const Wiki = () => {
  const setInfo = (e) => {};
  return (
    <Fragment>
      <Navbar data-bs-theme="dark" className="nav-bar justify-content-left">
        <Container>
          <Navbar.Brand>Wiki</Navbar.Brand>
          <Nav className="me-auto" variant="tabs">
            <Nav.Link
              name="levels"
              href="#levels"
              onClick={(e) => {
                setInfo(e);
              }}
            >
              Niveles
            </Nav.Link>
            <Nav.Link
              name="characters"
              href="#characters"
              onClick={(e) => {
                setInfo(e);
              }}
            >
              Personajes
            </Nav.Link>
            <Nav.Link
              name="enemies"
              href="#enemies"
              onClick={(e) => {
                setInfo(e);
              }}
            >
              Enemigos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="content">
        <Container>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Wiki;
