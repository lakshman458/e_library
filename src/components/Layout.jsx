import{ React }from "react";
import elibrary from "../assets/elibrary.png";
import '../styles/components/layout.css'

const Layout = (props) => {
  return (
    <div className="layout">
        <div className="container">
            <div>
                <div className="e-logo">
                    <img src={elibrary} />
                </div>
                {/* <div className="e-title">
                <h1>
                    E-Library
                    <span> powered by </span>
                </h1>
                </div> */}
                {/* <img className="logo"alt="Text_file" src={Cpagemini} /> */}
            </div>
            {props.children}
        </div>
    </div>
  );
};

export default Layout;
