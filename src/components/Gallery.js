import { useEffect, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/gallery.css";
import { FormattedMessage } from "react-intl";

function Gallery() {
  const location = useLocation();
  const canEdit = location.state || 0;
  const [parts, setPartsList] = useState([]);
  const [carModel, setCarModel] = useState("M3");

  useEffect(() => {
    let URL =
      "https://raw.githubusercontent.com/leo283/Parcial-web/main/datos.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPartsList(data);
      });
  }, []);

  // Event handler to set detailId when a card is clicked
  const handleCardClick = (carModel) => {
    setCarModel(carModel);
  };

  // Divide parts into groups of three for displaying three elements per row
  const rows = [];
  for (let i = 0; i < parts.length; i += 3) {
    rows.push(parts.slice(i, i + 3));
  }

  return (
    <div>
      <Container>
        <h2>
          <FormattedMessage id="encontrado" />
        </h2>
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((part) => (
              <Col key={part.carModel} xs={12} sm={6} md={4}>
                <Link
                  to={"/parts/" + carModel}
                  state={{ carModel: part.carModel, canEdit: canEdit }}
                  style={{ textDecoration: 'none' }}
                >
                  <Card
                    className="mb-3 tarjeta"
                    onClick={() => handleCardClick(part.carModel)}
                  >
                    <div>
                      <Card.Img src={part.image} alt={part.partName} />
                      <h2>{part.partName}</h2>
                      <h3>{part.carMaker}</h3>
                      <p>
                        {part.price} - {part.carYear}
                      </p>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Gallery;
