import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import useUserContext from "../hooks/useUserContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserModal.css";

const UserModal = ({ showModal }) => {
  const { user, closeModal, logoutUser, loginUser } = useUserContext();
  const defaultUserState = {
    email: "",
    password: "",
  };

  const [loginUserData, setLoginUserData] = useState(defaultUserState);

  const handleChange = (e) => {
    setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    await loginUser(loginUserData);
  };

  return (
    <Modal size="md" centered show={showModal} onHide={closeModal}>
      <Modal.Header closeButton className="user-modal">
        <Modal.Title>{user ? "User" : "Log In"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="user-modal">
        {user ? (
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xs={12}>{user.email}</Col>
                </Row>
                <Row>
                  <Col xs={4}>{user.role}</Col>
                </Row>
                <Row>
                  <Button
                    onClick={() => {
                      logoutUser();
                    }}
                    variant="danger"
                  >
                    Log Out
                  </Button>
                </Row>
              </Col>
              <Col>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68D1zB62HiAWZAkQpessCgGpmfvJQUX8Rhg&usqp=CAU"
                  alt="noPhoto"
                />
              </Col>
            </Row>
          </Container>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email usuario</Form.Label>
              <Form.Control
                className="formInput"
                required
                type="email"
                name="email"
                placeholder="Introduzca email"
                autoFocus
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="formInput"
                required
                type="password"
                name="password"
                placeholder="Contraseña"
                s
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Button onClick={handleLogin} variant="success">
              Log In
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer className="user-modal">
        <Button onClick={closeModal} variant="warning">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
