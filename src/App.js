import Login from "./pages/Login";
import Portal from "./pages/Portal";
import store from "./store";
import { Navigate, Route, Routes} from "react-router-dom";

function ProtectedRoute(){
  const state =  store.getState();
  if(!state.user.id) {
    return <Navigate replace to="/login" />
  }
  return <Portal/>
}

function RedirectRoute({ element }){
  const state =  store.getState();
  if(!state.user.id) {
    return element
  }
  return <Navigate replace to= '/'/>
}

function App() {
  return (
    <div>
        <Routes>
          <Route path="/"  element={<Navigate replace to={'/portal'}/>}/>
          <Route path="/portal"  element={<ProtectedRoute/>}/>
          <Route path="/login"  element={<RedirectRoute element={<Login/>}/>} />
        </Routes>
    </div>
  )
}

export default App;
