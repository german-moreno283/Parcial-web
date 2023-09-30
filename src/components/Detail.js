import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../styles/detail.css";
import { FormattedMessage } from "react-intl";
function Detail() {
  const location = useLocation();
  const props = location.state || {};
  const carModel = props.carModel;
  const canEdit = props.canEdit;

  const [part, setPart] = useState({
    carModel: "defaultModel",
    image: "defaultImg",
    partName: "defaultPart",
    carMaker: "defaultMaker",
    price: "defaultPrice",
    carYear: "defaultYear",
    available: "available",
    description: "defaultDescription",
  });

  useEffect(() => {
    let URL =
      "https://raw.githubusercontent.com/leo283/Parcial-web/main/datos.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          console.log(element);
          if (element["carModel"] === carModel) {
            setPart(element);
            break;
          }
        }
      });
  }, [carModel]);

  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-1">
          <Col style={{ width: "600px" }}>
            <img src={part.image} style={{ width: "600px", height: "400px" }} />
          </Col>
          <Col className="ml-5">
            <h1>{part.partName}</h1>
            <hr style={{ color: "black" }}></hr>
            <span className="colorRed"><FormattedMessage id="CarMaker"/>: </span>{" "}
            <span>{part.carMaker}</span>
            <br />
            <span className="colorRed"><FormattedMessage id="CarYear"/>: </span>{" "}
            <span>{part.carYear}</span>
            <br />
            <span className="colorRed"><FormattedMessage id="CarModel"/>: </span>{" "}
            <span>{part.carModel}</span>
            <br />
            <span className="colorRed"><FormattedMessage id="AvailableOnline"/>: </span>{" "}
            <span>{part.available ? "Yes" : "No"}</span>
            <br />
            <span className="colorRed"><FormattedMessage id="Price"/>: </span> <span>{part.price}</span>
            <br />
            <span className="colorRed"><FormattedMessage id="Description"/>: </span>
            <br></br>
            {canEdit ? (
              part.description != "defaultDescription" && (
                <input defaultValue={part.description}></input>
              )
            ) : (
              <p> {part.description}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Detail;
