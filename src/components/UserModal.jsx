import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useUserContext from "../hooks/useUserContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserModal.css";

const UserModal = ({ showModal }) => {
  const { user, closeModal } = useUserContext();
  const defaultUserState = {
    email: "",
    password: "",
  };

  const [loginUser, setLoginUser] = useState(defaultUserState);

  handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {};

  return (
    <Modal size="md" centered show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? "pepe" : "Log In"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user ? (
          <></>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email usuario</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contrasenya</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Button onClick={handleLogin}>Log In</Button>
          </Form>
        )}
      </Modal.Body>
      {!user && (
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default UserModal;
