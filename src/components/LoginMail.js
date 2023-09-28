import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
function LoginMail() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [goToLink,setGoToLink] = useState("/")
  
  const updateEmail = (event) => {
    setEmail(event.target.value);
    let emailRegex = /\S+@\S+\.\S+/;
    setEmailValid(emailRegex.test(email));
    setGoToLink(emailValid?"/pswd":"/");
  };

  const handleButtonPress = () => {};

  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Acceder</Form.Label>
            <br />
            <Form.Text className="text-muted">
              Usa tu cuenta de UniAlpes
            </Form.Text>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={updateEmail}
              value={email}
              style={{ borderColor: emailValid ? "" : "red" }}
            ></Form.Control>

            {!emailValid && (
              <Form.Text className="text-muted">
                Your email does not have the correct format
              </Form.Text>
            )}
          </Form.Group>
        </Form>
        <br />

        <Link to={{path:{goToLink}, state:{email:{email}}}}>
          <Button onClick={handleButtonPress} >Lets go</Button>
        </Link>
      </Container>
    </div>
  );
}
export default LoginMail;
