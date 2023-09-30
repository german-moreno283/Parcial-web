import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
function LoginMail() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [goToLink, setGoToLink] = useState("/");

  const updateEmail = (event) => {
    setEmail(event.target.value);
    let emailRegex = /\S+@\S+\.\S+/;
    setEmailValid(emailRegex.test(email));
    console.log(emailValid);
    console.log(goToLink);
    setGoToLink(emailValid ? "/pswd" : "/");
  };

  const handleButtonPress = () => {};

  return (
    <div>
      <Container style={{ "margin-top": "5rem", display: "flex", "justifyContent":"center" ,"alignItems":"center" }}>
        <Form>
          <Form.Group>
            <h2>
              <FormattedMessage id="Acceder" />
            </h2>

            <FormattedMessage id="usaCuenta" />
            <br />
            <br />
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              onChange={updateEmail}
              value={email}
              style={{ borderColor: emailValid ? "" : "red" }}
            ></Form.Control>

            {!emailValid && (
              <Form.Text className="text-muted">
                <FormattedMessage id="invalidMail" />
              </Form.Text>
            )}
          </Form.Group>
          <br/>

          <Link to={goToLink} state={{ email }}>
            <Button onClick={handleButtonPress}>
              <FormattedMessage id="irAContra" />
            </Button>
          </Link>
        </Form>
        <br />
      </Container>
    </div>
  );
}
export default LoginMail;
