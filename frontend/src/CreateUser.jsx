
import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import md5 from "md5";
import Alert from "react-bootstrap/Alert";

const CreateUser = (props) => {
   const emailInputRef = useRef();
  const passwordInputRef = useRef();
   const ageInputRef = useRef();
   const nameInputRef = useRef();
const [showSuccess, setShowSuccess] = useState(false);
const [showError, setShowError] = useState(false);
const [errorText, setErrorText] = useState("");
 function handleLoginForm() {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const age = ageInputRef.current.value;
    const name = nameInputRef.current.value;
    const hashedPassword = md5(password);
    
    /*const hashedPassword = bcrypt.hashSync(
       password,
       salt
     );*/

    console.log(hashedPassword);
    fetch("http://localhost:3002/api/add_user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: hashedPassword,
        age: age,
        name: name
      }),
    }).then(r=>{
       setShowSuccess(true);

    }).catch(e=>{
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
              ref={nameInputRef}
              type="text"
              placeholder="Name"
            />
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
              ref={ageInputRef}
              type="number"
              placeholder="Age"
            />
            <button
              type="submit"
              style={{ padding: "15px", borderRadius: "10px", margin: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                handleLoginForm();
              }}
            >
              Create Account
            </button>
          </form>
        <Alert show={showSuccess} variant="success">
          <p> Account successfully created</p>

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

export default CreateUser;
