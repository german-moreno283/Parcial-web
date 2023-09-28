import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
function LoginPass(props) {

  const [pass, setpass] = useState("");
  const [passValid, setpassValid] = useState(false);

  const updatePassword = (event) => {
    setpass(event.target.value);
    
    setpassValid(pass.length>=6?true:false);
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
              type="password"
              placeholder="Enter your password"
              onChange={updatePassword}
              value={pass}
              style={{ borderColor: passValid ? "" : "red" }}
            ></Form.Control>

            {!passValid && (
              <Form.Text className="text-muted">Your pass does not have the correct format</Form.Text>
            )}
          </Form.Group>
        </Form>
        <br />
        <Button>Acceder</Button>
      </Container>
    </div>
  );
}
export default LoginPass;
