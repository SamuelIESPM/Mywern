import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Game = () => {
  return (
    <Fragment>
      <Alert variant="dark" className="m-5 gameAlert">
        <Alert.Heading>Alto ahí</Alert.Heading>
        <p>Parece que te has perdido explorador, el camino está bloqueado.</p>
        <img
          src="https://media1.tenor.com/m/TCEyVCo9wG0AAAAC/dark-souls-bonfire.gif"
          alt="Descanso hoguera"
        />
        <p>
          Descansa hasta que se abra el camino. O si lo prefieres{" "}
          <Alert.Link>
            <Link to="/wiki">aquí</Link>
          </Alert.Link>{" "}
          tienes un atajo para continuar por otro lado
        </p>
      </Alert>
    </Fragment>
  );
};

export default Game;
