import React, { Fragment, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import useUserContext from "../hooks/useUserContext.jsx";
import useLevelsContext from "../hooks/useLevelsContext.jsx";
import { Player } from "@lordicon/react";
import REMOVE from "../assets/trashBin.json";
import EDIT from "../assets/editDocument.json";
import CLOSE from "../assets/minusCircle.json";
import WikiModal from "./WikiModal.jsx";

const Level = () => {
  const { deleteLevel, level, setLevel, openModal, showModal } =
    useLevelsContext();
  const { editMode } = useUserContext();
  const [localShowModal, setLocalShowModal] = useState(false);

  const deleteRef = useRef(null);
  const editRef = useRef(null);
  const closeRef = useRef(null);

  const handleHover = (ref) => {
    if (ref.current) ref.current.playFromBeginning();
  };

  const handleDelete = async () => {
    await deleteLevel(level[0].id);
    setLevel(null);
  };

  const handleEdit = () => {
    openModal();
    setLocalShowModal(true);
  };

  const closeLocal = () => {
    setLocalShowModal(false);
  };

  return (
    <Fragment>
      <Card bg="dark" text="light">
        {editMode && (
          <Card.Header style={{ display: "flex" }}>
            <i
              onMouseEnter={() => handleHover(deleteRef)}
              onClick={() => {
                handleDelete();
              }}
              style={{ cursor: "pointer" }}
            >
              <Player ref={deleteRef} size={30} icon={REMOVE} />
            </i>
            <i
              onMouseEnter={() => handleHover(editRef)}
              onClick={() => {
                handleEdit();
              }}
              style={{ cursor: "pointer" }}
            >
              <Player ref={editRef} size={30} icon={EDIT} />
            </i>
          </Card.Header>
        )}

        <Card.Title
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            Nivel {level[0].level_n} {level[0].name}
          </span>
          <i
            onMouseEnter={() => handleHover(closeRef)}
            onClick={() => {
              setLevel(null);
            }}
            style={{ cursor: "pointer" }}
          >
            <Player ref={closeRef} size={25} icon={CLOSE} />
          </i>
        </Card.Title>

        {level[0].image ? (
          <Card.Img src={level[0].image} alt={level[0].name} />
        ) : (
          <Card.Img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
            alt="Image not found"
          />
        )}
        <Card.Body>{level[0].description}</Card.Body>
      </Card>
      {localShowModal && (
        <WikiModal
          show={showModal}
          type="Nivel"
          func="edit"
          closeAdd={closeLocal}
        />
      )}
    </Fragment>
  );
};

export default Level;
