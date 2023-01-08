import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import CreateUser from "./CreateUser";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
//import bcrypt from "bcryptjs";
//const salt = bcrypt.genSaltSync(10);
function App() {
 
  const [isLoggedIn,setIsLoggedIn] = useState(false);
 const [view, setView] = useState(0);
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
       return <ResetPassword/>;
     }
     case 4: {
       return <></>;
     }

     default:
       return "";
   }
 };
 
  const logged =(login)=>
  {
    if(login)
    {
      setIsLoggedIn(true);
    }
    else
    {
    setIsLoggedIn(false);
    }

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
      <Button
        variant="error"
        onClick={() => {
          setView(0);
          setIsLoggedIn(false);
        }}
      >
       Log out
      </Button>{" "}
    </Container>
  );
}

export default App;
