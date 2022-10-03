import{ React,useState}from "react";
import elibrary from "../assets/elibrary.png";
import Cpagemini from "../assets/Picture2.png";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import "../styles/components/Header.css"

const Header = () => {
  const [login,setLogin] = useState(true);
  return (
    <div>
      <header>
        <div className="elibrary_img">
          <img src={elibrary} />
         
        </div>

        <div className="e_library">
          <h1>
            E-Library
            <span> powered by </span>
          </h1>
        </div>
       
        <img className="logo"alt="Text_file" src={Cpagemini} />
        {login ? <Login/>: <Logout logout="setLogin"/>}
      </header>
     
  
    </div>
  );
};

export default Header;
