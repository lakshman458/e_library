import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import img from "../assets/Picture1.png";
import { BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./dashboard.css";
import Dashbord from "../components/Dashbord";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SurfEbook from "../pages/SurfEbook";


const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={img} />

            <Navbar.Text>E-Library powered by</Navbar.Text>
          </Navbar.Brand>

         <BsFillBellFill/>
         <CgProfile/>
        </Container>
       
      </Navbar>
      {/* <Dashbord /> */}

<aside>


{/* <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/dashbord">Dashbord</Nav.Link>
      <Nav.Link eventKey="/surf">surf e-book</Nav.Link>
      <Nav.Link eventKey="link-2">Take quiz</Nav.Link>
    </Nav> */}


<Tab.Container id="left-tabs-example"  defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Dashbord</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">SurfEbook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">Take quiz</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10} className="mt-5">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Dashbord/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <SurfEbook/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>


</aside>



    </div>
  );
};

export default Navbars;
