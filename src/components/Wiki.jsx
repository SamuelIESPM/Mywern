import React, { Fragment, useState, useRef } from "react";
import { Navbar, Container, Nav, Row, Col, Alert } from "react-bootstrap";
import useLevelsContext from "../hooks/useLevelsContext.jsx";
import useUserContext from "../hooks/useUserContext.jsx";
import { Player } from "@lordicon/react";
import WikiModal from "./WikiModal.jsx";
import Level from "./Level.jsx";
import ADD from "../assets/plusCircle.json";
import "./Wiki.css";

const Wiki = () => {
  const {
    levelsList,
    situation,
    level,
    selectLevel,
    setLevel,
    openModal,
    showModal,
  } = useLevelsContext();
  const { editMode } = useUserContext();
  const addRef = useRef(null);

  const expandedSize = 12;
  const [selectedWiki, setSelectedWiki] = useState(null);
  const [leftColSize, setLeftColSize] = useState(expandedSize);
  const [localShowModal, setLocalShowModal] = useState(false); //

  const handleHover = (ref) => {
    if (ref.current) ref.current.playFromBeginning();
  };

  const handleSelect = async (e) => {
    await selectLevel(e.target.id);
  };

  const setInfo = (e) => {
    setSelectedWiki(e.target.name);
  };

  const handleAdd = () => {
    openModal();
    setLocalShowModal(true);
  };

  const closeLocal = () => {
    setLocalShowModal(false);
  };

  return (
    <Fragment>
      <Navbar data-bs-theme="dark" className="nav-bar justify-content-left">
        <Container>
          <Navbar.Brand
            onClick={() => {
              setSelectedWiki(null);
            }}
            style={{ cursor: "pointer" }}
          >
            Wiki
          </Navbar.Brand>
          <Nav
            className="me-auto"
            variant="tabs"
            activeKey={`#${selectedWiki}`}
          >
            <Nav.Link
              name="levels"
              href="#levels"
              value="Niveles"
              onClick={(e) => {
                setInfo(e);
                setLevel(null);
              }}
            >
              Niveles
            </Nav.Link>
            <Nav.Link
              name="characters"
              href="#characters"
              onClick={(e) => {
                setInfo(e);
                setLevel(null);
              }}
            >
              Personajes
            </Nav.Link>
            <Nav.Link
              name="enemies"
              href="#enemies"
              onClick={(e) => {
                setInfo(e);
                setLevel(null);
              }}
            >
              Enemigos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div id="content">
        <Container fluid>
          <Row>
            {selectedWiki ? (
              <>
                <Col sm={1}>
                  {editMode && (
                    <i
                      onMouseEnter={() => handleHover(addRef)}
                      onClick={() => {
                        handleAdd();
                      }}
                      style={{ width: 10, cursor: "pointer" }}
                    >
                      <Player ref={addRef} size={40} icon={ADD} />
                    </i>
                  )}
                </Col>
                <Col>
                  {
                    <h2>
                      {selectedWiki.charAt(0).toUpperCase() +
                        selectedWiki.slice(1)}
                    </h2>
                  }
                </Col>
              </>
            ) : (
              <h2>Inicio</h2>
            )}
          </Row>
          <Row>
            {selectedWiki ? (
              selectedWiki == "enemies" || selectedWiki == "characters" ? (
                <Alert key="danger" variant="primary">
                  <Alert.Heading>¡¡DEMASIADO PRONTO!!</Alert.Heading>
                  Este apartado no está implementado aún.
                </Alert>
              ) : levelsList ? (
                <>
                  <Col
                    sm={leftColSize}
                    onClick={(e) => {
                      if (e.target.classList.contains("listed-level")) {
                        handleSelect(e);
                        setLeftColSize(8);
                      }
                    }}
                  >
                    {levelsList.map((level) => {
                      return (
                        <h4
                          className="listed-level"
                          id={level.id}
                          key={level.id}
                          style={{ cursor: "pointer" }}
                        >
                          Nivel {level.level_n} | {level.name}
                        </h4>
                      );
                    })}
                  </Col>
                  <Col sm={12 - leftColSize}>
                    {level && <Level key={level.id} />}
                  </Col>
                </>
              ) : (
                situation
              )
            ) : (
              <Col>
                Bienvenido a la wiki! Aquí podrás encontrar toda la información
                necesaria para ayudarte en tu aventura por Sannorix.
              </Col>
            )}
          </Row>
        </Container>
      </div>
      {showModal && (
        <WikiModal
          show={localShowModal}
          type="Agregar"
          func="add"
          closeAdd={closeLocal}
        />
      )}
    </Fragment>
  );
};

export default Wiki;
