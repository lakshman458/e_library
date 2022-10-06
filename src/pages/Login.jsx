import { useState, React } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import store from "../store";
import { getUser } from "../store/reducers/auth";
import '../styles/login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const getNavigete = async (event) => {
    event.preventDefault();
    try {
      await store.dispatch(getUser(email, password));
      navigate('/');
    } catch (err) {
      alert(err)
    }
  };

  return (
   <Layout>
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
    </Layout>
  );
};

export default Login;
