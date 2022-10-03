import Login from "./pages/Login";
import { Route,Routes } from "react-router-dom";
import Navbars from "./components/Navbars.jsx"
import './styles/library.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/navbars" element={<Navbars/>}/>
      </Routes>
    </div>
  )
}

export default App;
