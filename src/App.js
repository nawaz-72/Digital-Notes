import "./App.css";
import Navbar from "./Compoenet/Navbar";
import Home from "./Compoenet/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Compoenet/About";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Compoenet/Alert";
import Login from "./Compoenet/Login";
import Signup from "./Compoenet/Signup";
import React, { useState } from "react";

function App() {
  /* const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }; */
  return (
    <>
      <NoteState>
        <Router>
          <Navbar header="Home" />
          <Alert />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
