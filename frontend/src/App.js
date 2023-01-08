import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import CreateUser from "./CreateUser";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Profile from './Profile';
//import bcrypt from "bcryptjs";
//const salt = bcrypt.genSaltSync(10);
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState(0);
  const [email, setEmail] = useState(null);
  const renderView = (param) => {
    switch (param) {
      case 0: {
        return (
          <>
            <h2>Welcome in our personal notes system, how can we help? - Click on button above</h2>
          </>
        );
      }
      case 1: {
        return (
          <>
            <CreateUser />
          </>
        );
      }
      case 2: {
        return <Login login={logged} />;
      }
      case 3: {
        return <ResetPassword />;
      }
      case 4: {
        return <></>;
      }

      default:
        return "";
    }
  };

  const logged = (email) => {
    if (email) {
      setIsLoggedIn(true);
      setEmail(email);
    }
    else {
      setIsLoggedIn(false);
      setEmail(null);
    }

  }

  function handleLoginForm() {

    fetch("http://localhost:3002/api/get/MariaF@gmail.com", {
      //'%20or%201=1--%20
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.status === 200) {
          return r.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return !isLoggedIn ? (
    <Container fluid className="justify-content-center">
      <div className="App mt-5 text-center">
        <Button
          variant="primary"
          onClick={() => {
            setView(1);
          }}
        >
          Create Account
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => {
            setView(2);
          }}
        >
          Login
        </Button>{" "}
        <Button
          variant="success"
          onClick={() => {
            setView(3);
          }}
        >
          Reset Password
        </Button>{" "}
        <div className="text-center">{renderView(view)}</div>
      </div>
    </Container>
  ) : (
    <Container>
      <Profile />
      {/* pass email as prop to profile */}
      <Button
        variant="success"
        onClick={() => {
          setView(0);
          setIsLoggedIn(false);
        }}
      >
        Log out
      </Button>{" "}
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
    </Container>
  );
}

export default App;
