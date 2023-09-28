import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Detail(props) {
  const [part, setPart] = useState({
    nombre: "Loading",
    tipo: "Loading",
    region: "Loading",
    notas: "Loading",
    fecha_cultivo: "Loading",
    imagen: "",
  });

  useEffect(() => {
    let URL =
      "https://raw.githubusercontent.com/leo283/Parcial-web/main/datos.json/parts/" +
      props.partId;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPart(data);
      });
  }, [props.partId]);

  return (
    <div>
      <Card
        key={part.carModel}
        onClick={() => handleCardClick(part.id)}
        style={{ cursor: "pointer" }}
        className="mb-3"
      >
        <div>
          <Card.Img
            src={part.image}
            width={"300px"}
            height={"200px"}
          ></Card.Img>
          <h1>{part.partName}</h1>
          <h3>{part.carMaker}</h3>
          <p>
            {part.price} - {part.carYear}
          </p>
          <p>{part.description}</p>
        </div>
        <Link to={"/parts/" + { detailId }}>Go to detail</Link>
      </Card>
    </div>
  );
}

export default Detail;
