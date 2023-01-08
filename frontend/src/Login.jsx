import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import md5 from "md5";
import Alert from "react-bootstrap/Alert";

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  function handleLoginForm() {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const hashedPassword = md5(password);

    console.log(hashedPassword);
    fetch("http://localhost:3002/api/login/"+email+"/"+hashedPassword, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        setShowSuccess(true);
        console.log(r)
      })
      .catch((e) => {
        setErrorText(e);
        setErrorText(e);
      });
  }
  return (
    <>
      <Container fluid className="justify-content-center">
        <form>
          <input
            style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
            ref={emailInputRef}
            type="email"
            placeholder="Email"
          />
          <input
            style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
            onClick={(e) => {
              e.preventDefault();
              handleLoginForm();
            }}
          >
            Login
          </button>
        </form>
        <Alert show={showSuccess} variant="success">
          <p> Welcome!</p>

          <div className="d-flex justify-content-end">
            <Button
              onClick={() => setShowSuccess(false)}
              variant="outline-success"
            >
              Close
            </Button>
          </div>
        </Alert>
        <Alert
          variant="danger"
          show={showError}
          onClose={() => setShowError(false)}
          dismissible
        >
          <Alert.Heading>Oh snap! Error!</Alert.Heading>
          <p>{errorText}</p>
        </Alert>
      </Container>
    </>
  );
};

export default Login;
