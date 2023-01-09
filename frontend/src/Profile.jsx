import React, { useRef, useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Alert from "react-bootstrap/Alert";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
const Profile = ({ emailProp }) => {
  const [note, setNote] = useState([]);
  const [userInstance, setUserInstance] = useState([]);
  const [userLoaded, setUserLoaded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const email = emailProp;
  const noteTitleRef = useRef();
  const noteRef = useRef();
  const fetchUserNotes = async () => {
    try {
      let response = await fetch("http://localhost:3002/api/getnote/" + email, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      setErrorText("Wrong password or user does not exists");
      setShowError(true);
      return { success: false };
    }
  }
  const fetchUserData = async () => {
    try {
      let response = await fetch("http://localhost:3002/api/get_userinfo/" + email, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      setErrorText("Error:" + error);
      setShowError(true);
      return { success: false };
    }
  }
  // add fetchUserData to useffect
  useEffect(() => {
    (async () => {
      setUserLoaded(false);
      let userNotesRes = await fetchUserNotes();
      let userDataRes = await fetchUserData();
      console.log(userDataRes);
      let tempNotesArray = [];
      if (userDataRes.success) {
        setUserInstance(userDataRes.data[0]);
        // setNote(res.data[0]);
        setUserLoaded(true);
      }
      if (userNotesRes.success) {
        for (let i = 0; i < userNotesRes.data.length; i++) {
          tempNotesArray.push(userNotesRes.data[i]);
        }
        setNote(tempNotesArray);

      }
    })();
  }, []);


  function handleSubmitNote() {

    const noteTitle = noteTitleRef.current.value;
    const noteContent = noteRef.current.value;


    fetch("http://localhost:3002/api/add_note", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        title: noteTitle,
        content: noteContent,
        email: email,
      }),
    }).then(r => {
      if (r.status === 403) {
        setErrorText("something went wrong, please try again");
        setShowError(true);
      }
      else
        setShowSuccess(true);

    }).catch(e => {
      setErrorText(e);
      setShowError(true);
    });
  }

  return (
    <>
      <Container fluid className="justify-content-center mt-5" >
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
        <div className='mb-5'>
          <Row>
            <Col xs={5}>
              <Card className="w-100 mt-5">
                <Card.Body>
                  <p className="lead text-center">Your Data</p>
                  <hr />
                  <Row>
                    <Col xs={4}>
                      <Card.Text>
                        Name
                      </Card.Text>
                    </Col >
                    <Col xs={8}>
                      <Card.Text>
                        {userInstance.name}
                      </Card.Text>
                    </Col >
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <Card.Text>
                        Email
                      </Card.Text>
                    </Col >
                    <Col xs={8}>
                      <Card.Text>
                        {email}
                      </Card.Text>
                    </Col >
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <Card.Text>
                        Age
                      </Card.Text>
                    </Col >
                    <Col xs={8}>
                      <Card.Text>
                        {userInstance.age}
                      </Card.Text>
                    </Col >
                  </Row>

                </Card.Body>

              </Card>
            </Col>
            <Col xs={7}>
              <Card className="w-100">
                <Card.Body>
                  <p className="lead text-center">Create New Note</p>
                  <hr />
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Add a note title</Form.Label>
                      <Form.Control type="text" ref={noteTitleRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                      <Form.Label>Add a note</Form.Label>
                      <Form.Control as="textarea" aria-label="With textarea" ref={noteRef} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(e) => {
                      e.preventDefault();
                      handleSubmitNote();
                    }}>
                      Submit
                    </Button>
                  </Form></Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className='mb-5'>
          {userLoaded ? (
            <Card className="w-100">
              <Card.Body>
                <p className="lead text-center">Your notes</p>
                <hr />
                {note && note.map((data, index) => {
                  return <ul key={index}>
                    <li><strong>Note Title:</strong> {data.title}</li>
                    <li><strong>Note:</strong> {data.content}</li>
                    <hr />
                  </ul>
                })}

              </Card.Body>
            </Card>
          ) : (
            <p>No Notes found, try writing a new note</p>
          )}
        </div>


      </Container>
    </>
  );
};

export default Profile;
