import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Home from "./Home";
import Services from "./Services";
import Exit from "./Exit";
import "./App.css";

function App() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("UserName") || "";
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

useEffect(() => { if(name) {
  localStorage.setItem("UserName", name);
}
}, [name]);

function handleExit() {
  localStorage.removeItem("UserName");
  setName("");
  navigate("/");
}

  return (
    <Routes>
      {/* INTRO / LOGIN PAGE */}
      <Route path="/"
        element={
          <div className="App">
            <div className="intro">
              <h1>Healthcare simplified for you...</h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <button type="submit">ENTER</button>
              </form>

              <p>Book your appointment today!</p>
            </div>
          </div>
        }
      />

      {/* HOME PAGE */}
      <Route path="/Home" element={<Home name={name} />} />

      {/* SERVICES PAGE */}
      <Route path="/Services" element={<Services name={name} />} />
      {/* EXIT PAGE */}
      <Route path="/Exit" element={<Exit onExit={handleExit} />} />
    </Routes>
  );
}

export default App;