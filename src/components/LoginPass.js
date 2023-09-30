import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function LoginPass() {

  const canEdit = Math.round(Math.random());
  const [goToLink, setGoToLink] = useState("/pswd")
  const [pass, setpass] = useState("");
  const [showPswd, setShowPswd] = useState(false);
  const [passValid, setpassValid] = useState(true);
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

  const handleCheckMark = ()=>{
    setShowPswd(!showPswd)
  }
  
  return (
    <div>
      <Container className="" style = {{"margin-top":"5rem"}}>
        <Form>
          <Form.Group>
            <Form.Label><FormattedMessage id="Acceder"/></Form.Label>
            <br />
            <Form.Text className="text-muted">
            <FormattedMessage id="usaCuenta"/>
            </Form.Text>
            <Form.Control
              type={showPswd?"text":"password"}
              placeholder="Ingresa tu contraseña"
              onChange={updatePassword}
              value={pass}
              style={{ borderColor: passValid ? "" : "red" }}
            ></Form.Control>

            {!passValid && (
              <Form.Text className="text-muted">
                <FormattedMessage id = "invalidPass"/>
              </Form.Text>
            )}
           <Form.Check value={showPswd} label = {<FormattedMessage id = "ShowPswd"/>} onChange={handleCheckMark}></Form.Check>
          </Form.Group>

        </Form>
        <br />
        <Link to={goToLink} state = {canEdit}>
        <Button onClick={handleButtonPress}>
        <FormattedMessage id="Acceder"/>
        </Button>
        </Link>
      </Container>
    </div>
  );
}
export default LoginPass;
