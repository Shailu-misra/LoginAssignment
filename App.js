import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;