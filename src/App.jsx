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
    //navigate() changes the URL
    // Route checks the URL path
    // Route renders the element for that path
  };

useEffect(() => { if(name) {
  localStorage.setItem("UserName", name);
} else {
  localStorage.removeItem("UserName");
}
}, [name]);

function handleExit() {
  localStorage.removeItem("UserName");
  setName("");
  navigate("/", { replace: true });
  // without replace: true -- history will be / → /Home → /Services → /Exit → /
  // with replace: true -- history will be / → /Home → /Services → /
  // you can not go back to EXIT - replace: true only removes ONE entry from browser history — not all previous pages. Replace the current page in history with /
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
      <Route path="/Home" element={name ? <Home name={name} /> : <Navigate to="/" />} />
      {/* SERVICES PAGE */}
      <Route path="/Services" element={name ? <Services name={name} /> : <Navigate to="/" />} />
      {/* 
      To stop users from seeing Home/Services after Exit, protect routes (conditional element rendering)

      if name is empty (logged out state) 
      user goes back the previous page, app immediately redirects to / as the name is false(empty)

      replace: true cleans the last step.
      Route protection blocks access.
      */}

      {/* EXIT PAGE */}
      <Route path="/Exit" element={<Exit onExit={handleExit} />} />
    </Routes>
  );
}

export default App;