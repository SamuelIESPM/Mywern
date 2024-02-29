import React, { Fragment } from "react";

const Landing = () => {
  const images = [];
  for (let i = 0; i < 14; i++) {
    images.push(
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"
        key={i}
      />
    );
  }
  return (
    <Fragment>
      <div className="landing">
        <p>
          Mywern es un título RPG, el cual transcurre en el mundo de "Sannorix",
          situado en la galaxia de Andrómeda. <br /> En esta aventura
          acompañaremos a Karben y sus compañeros a lo largo de varias regiones
          del planeta, enfrentando todo tipo de adversidades.
        </p>
        {images}
      </div>
    </Fragment>
  );
};

export default Landing;
