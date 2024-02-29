import React, { Fragment, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import useUserContext from "../hooks/useUserContext.jsx";
import useLevelsContext from "../hooks/useLevelsContext.jsx";
import { Player } from "@lordicon/react";
import REMOVE from "../assets/minusCircle.json";

const Level = (props) => {
  const { deleteLevel } = useLevelsContext();
  const { editMode } = useUserContext();

  const deleteRef = useRef(null);
  const { level_n, name, id } = props.data;

  const handleHover = (ref) => {
    if (ref.current) ref.current.playFromBeginning();
  };

  const handleDelete = async () => {
    await deleteLevel(id);
  };

  return (
    <Fragment>
      <Row>
        <Col sm={5}>
          <h2>Nivel {level_n}</h2>
        </Col>
        <Col sm={6}>
          <h3>{name}</h3>
        </Col>
        <Col>
          {editMode && (
            <i
              onMouseEnter={() => handleHover(deleteRef)}
              onClick={() => {
                handleDelete();
              }}
              style={{ width: 10, cursor: "pointer" }}
            >
              <Player ref={deleteRef} size={40} icon={REMOVE} />
            </i>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Level;
