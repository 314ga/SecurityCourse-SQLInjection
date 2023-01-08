import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import md5 from "md5";
import Alert from "react-bootstrap/Alert";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Profile = (props) => {
  const emailInputRef = useRef();

  const [errorText, setErrorText] = useState("");
  function handleLoginForm() {
   console.log("something")
  }
  return (
    <>
      <Container fluid className="justify-content-center mt-5" >
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Your Data</Card.Title>
        <Row>
          <Col xs={4}>
             <Card.Text>
         Full name
        </Card.Text>
          </Col >
          <Col xs={4}>
             <Card.Text>
         Full name
        </Card.Text>
          </Col >
          </Row>
        <Row>
          <Col xs={4}>
             <Card.Text>
         Email
        </Card.Text>
          </Col >
          <Col xs={4}>
             <Card.Text>
         jone@sld
        </Card.Text>
          </Col >
          </Row>
        <Row>
          <Col xs={4}>
             <Card.Text>
        Age
        </Card.Text>
          </Col >
          <Col xs={4}>
             <Card.Text>
        33
        </Card.Text>
          </Col >
          </Row>
          <hr/>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Profile;
