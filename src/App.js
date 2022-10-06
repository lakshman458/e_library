import Login from "./pages/Login";
import Portal from "./pages/Portal";
import store from "./store";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import SurfEbook from "./pages/SurfEbook";
import Quiz from "./pages/Quiz";

function ProtectedRoute() {
  const state = store.getState();
  if (!state.user.id) {
    return <Navigate replace to="/login" />;
  }
  return <Portal />;
}

function RedirectRoute({ element }) {
  const state = store.getState();
  if (!state.user.id) {
    return element;
  }
  return <Navigate replace to="/" />;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index  element={<Dashbord />} />
          <Route path={`books`} element={<SurfEbook />} />
          <Route path={`quiz`} element={<Quiz />} />
        </Route>
        <Route path="login" element={<RedirectRoute element={<Login />} />} />
      </Routes>
    </div>
  );
}

export default App;
