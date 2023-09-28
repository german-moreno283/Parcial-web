import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
function LoginPass() {

  const canEdit = 1;
  const [goToLink, setGoToLink] = useState("/pswd")
  const [pass, setpass] = useState("");
  const [passValid, setpassValid] = useState(false);
  const location = useLocation()
  const props = location.state || {};
  console.log(props)
  const updatePassword = (event) => {
    setpass(event.target.value);
    setpassValid(pass.length>=6?true:false);
    setGoToLink(passValid?"/parts":"/pswd");
  };

  const handleButtonPress = () => {
    if (passValid){
    console.log("Logged in succesfully")}
  };
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
        <Link to={goToLink} state = {canEdit}>
        <Button onClick={handleButtonPress}>
          Acceder
        </Button>
        </Link>
      </Container>
    </div>
  );
}
export default LoginPass;
