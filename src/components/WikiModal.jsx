import React, { Fragment, useState, useEffect } from "react";
import useLevelsContext from "../hooks/useLevelsContext";
import {
  Alert,
  Form,
  Modal,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

const WikiModal = ({ show, type, func, closeAdd }) => {
  const initialLevel = {
    id: "",
    name: "...",
    description: "...",
    image: "",
    level_n: 0,
  };
  const { createLevel, updateLevel, level, closeModal, getLevels } =
    useLevelsContext();
  const [newLevel, setNewLevel] = useState(initialLevel);

  const handleChange = (e) => {
    setNewLevel({ ...newLevel, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    createLevel(newLevel);
    setNewLevel(initialLevel);
    getLevels();
    closeModal();
  };

  const handleEdit = () => {
    updateLevel(newLevel);
    setNewLevel(initialLevel);
    getLevels();
    closeModal();
  };

  useEffect(() => {
    if (func == "add") {
      const uuid = crypto.randomUUID();
      setNewLevel({ ...newLevel, id: uuid });
    }
    if (func == "edit") {
      setNewLevel(level[0]);
    }
  }, []);

  return (
    <Fragment>
      <Modal
        show={show}
        backdrop={false}
        keyboard={false}
        centered
        animation
        onHide={() => {
          show = false;
          closeModal();
          closeAdd();
        }}
      >
        <Modal.Header closeButton className="user-modal">
          <Modal.Title>{type}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="user-modal">
          <Container>
            <Row>
              <Col>
                {func == "add" ? (
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        autoFocus
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Form.Label>Nivel</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="number"
                        name="level_n"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="text"
                        name="description"
                        placeholder="Descripción..."
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Form.Label>Imagen</Form.Label>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        className="formInput"
                        type="text"
                        name="image"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Button onClick={handleAdd} variant="success">
                        Add
                      </Button>
                    </Form.Group>
                  </Form>
                ) : func == "edit" ? (
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={newLevel.name}
                        autoFocus
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Form.Label>Nivel</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="number"
                        name="level_n"
                        value={newLevel.level_n}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="text"
                        name="description"
                        placeholder="Descripción..."
                        value={newLevel.description}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Form.Label>Imagen</Form.Label>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        className="formInput"
                        required
                        type="text"
                        name="image"
                        placeholder="image.png/.jpg/.gif ..."
                        value={newLevel.image}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      <Button onClick={handleEdit} variant="primary">
                        Confirm changes
                      </Button>
                    </Form.Group>
                  </Form>
                ) : (
                  <Alert variant="danger">Por aquí no campeón</Alert>
                )}
              </Col>
              <Col>
                <Card bg="dark" text="light">
                  <Card.Header>Preview</Card.Header>
                  <Card.Title>
                    Nivel {newLevel.level_n} {newLevel.name}
                  </Card.Title>
                  {newLevel.image ? (
                    <Card.Img src={newLevel.image} alt={newLevel.name} />
                  ) : (
                    <Card.Img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
                      alt="Image not found"
                    />
                  )}
                  <Card.Body>{newLevel.description}</Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default WikiModal;
