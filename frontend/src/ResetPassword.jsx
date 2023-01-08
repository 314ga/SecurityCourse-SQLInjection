import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import md5 from "md5";
import Alert from "react-bootstrap/Alert";

const ResetPassword = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const newInputRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  function handleLoginForm() {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const newPassword = newInputRef.current.value;
    const hashedPassword = md5(password);
    const hashedNew = md5(newPassword);

    console.log(hashedPassword);
    fetch(
      "http://localhost:3002/api/reset/" +
        email +
        "/" +
        hashedPassword + "/" + hashedNew,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((r) => {
        if (r  === "OK") {
          setShowSuccess(true);
          props.login(true);
        } else {
          setErrorText("Error changing password");
          setShowError(true);
        }
        console.log(r);
      })
      .catch((e) => {
        setErrorText(e);
        setShowError(true);
      });
  }
  return (
    <>
      <Container fluid className="justify-content-center">
        <h1>Reset password page</h1>
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
          <input
            style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
            ref={newInputRef}
            type="password"
            placeholder="New Password"
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

export default ResetPassword;
