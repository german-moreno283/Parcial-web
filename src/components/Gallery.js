import { useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Detail from "./Detail";
import { Link } from "react-router-dom";

function Gallery(props) {
  const [parts, setPartsList] = useState([]);
  const [detailId, setDetailId] = useState(1);

  useEffect(() => {
    let URL =
      "https://raw.githubusercontent.com/leo283/Parcial-web/main/datos.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPartsList(data);
      });
  }, []);

  // Event handler to set detailId when a card is clicked
  const handleCardClick = (partId) => {
    setDetailId(partId)
  };

  return (
    <div>
      <Container style={{flexWrap:"wrap"}}>
        <h2>Partes Encontradas</h2>


          <div>
            {parts.map((part) => (

              <Card 
                key={part.carModel}
                onClick={() => handleCardClick(part.id)}
                style={{ cursor: "pointer" , }}
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
                </div>
                <Link to = {"/parts/"+{detailId}}>Go to detail</Link>
              </Card>

            ))}
          </div>

      </Container>
    </div>
  );
}

export default Gallery;
