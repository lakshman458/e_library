import Header from "./components/Header";
import Dashbord from "./pages/Dashbord"
import Quiz from "./pages/Quiz";
import SurfEbook from "./pages/SurfEbook";
import Login from "./pages/Login";
import { Route,Routes } from "react-router-dom";
import Emp from "./pages/Emp";
import Navbars from "./components/Navbars.jsx"
// import Login from "../pages/Login";

function App() {
  return (


    <div>
      {/* <SurfEbook/> */}
      {/* <Login></Login> */}
      {/* <Navbars/> */}

      {/* <SurfEbook/> */}
{/* <Emp/> */}
      <Routes>
        <Route path="/" element={<Header  />} />
        <Route path="/navbars" element={<Navbars/>}/>
        {/* <Route path="/dashbord" element={<Dashbord/>}/>
        <Route path="/surf" element={<SurfEbook/>} /> */}
      </Routes>
{/* <Header/> */}
{/* <Login/> */}
{/* <Dashbord></Dashbord> */}
{/* <SurfEbook/> */}
{/* <Quiz/> */}


    </div>
  );
}

export default App;
