import { Container, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import elibrary from "../assets/elibrary.png";
import "../styles/portal.css";

const tabs = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Surf e-books",
    link: "books",
  },
  {
    label: "Take Quiz",
    link: "quiz",
  },
];

const Portal = () => {
  return (
    <div className="portal">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img alt="e_book" src={elibrary} />
            <Navbar.Text>e-Library powered by</Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="portal__container">
        <SideBar tabs={tabs} />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const SideBar = (props) => {
  const { tabs } = props;

  const Tab = (tab) => {
    return (
      <NavLink to={tab.link} className="tab">
        {tab.label}
      </NavLink>
    );
  };
  return (
    <div className="e-sidebar">
      {tabs.map((tab, index) => (
        <Tab key={index} {...tab} />
      ))}
    </div>
  );
};

export default Portal;
