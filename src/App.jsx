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
  // useNavigate is a React Router hook that gives you a function to change the current URL using JavaScript.
  // here that function is named as navigate
  // We use useNavigate when navigation must happen as a result of logic, not a click on a link.

  //useNavigate gives me a function that I can call to change the URL programmatically. - provide by reactRouter

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home");
    // navigate() changes the URL AKA Updates the browser URL to /Home 
    // Re-runs <Routes>
    // Route checks the URL path & Finds the matching <Route path="/Home">
    // Route renders the element for that path
  };

useEffect(() => { 
  if(name) {
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
    // In React, a component’s return statement describes what UI should be rendered.
    // Routes are part of the UI, so they belong in the return statement.
    // Depending on the URL, I want to show different UI.
    // When the URL is /Home, render <Home />
    // When the URL is /Services, render <Services />
    // routes belong in the component’s return statement because routing is a rendering decision, and rendering decisions are declared in return.
    // <Routes> is the engine that decides which <Route> should render, and <Route> by itself is only a configuration object, not a component that renders UI.
    // In React, components don’t do anything unless another component renders them.
    // navigate() - changes the URL, <Routes> - listens to the URL, <Route> - Declares a possible UI, element - The UI to render
    // <Routes> is the decision‑maker; <Route> is just a rule. Rules do nothing unless someone evaluates them.
    // <Routes> must wrap <Route> because <Routes> is responsible for reading the current URL, evaluating all route definitions, selecting the best match, and rendering exactly one route; <Route> alone only declares possibilities and cannot render anything by itself.
  );
}

export default App;