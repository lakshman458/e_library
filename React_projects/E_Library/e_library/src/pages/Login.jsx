import { useState, React } from "react";
import "../styles/login.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import img from "../assets/Picture1.png";
// import Cpagemini from "../assets/Picture2.png";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  console.log(email);
  console.log(password);
  const getNavigete = () => {
    if (email == "lakshman.kl458@gmail.com" && password == "Lucky@458") {
      navigate("/navbars");
    } else {
      alert("wrong credentils");
    }
  };

  return (
    <div className="login">
      {/* <header>
        <div className="l_img">
          <img src={img} />
        </div>
        <div className="e_library">
          <h1>
            E-Library
            <span> powered by </span>
          </h1>
        </div>
        <img src={Cpagemini} />
        <div></div>
      </header> */}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={getNavigete} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
