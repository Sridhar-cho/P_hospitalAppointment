import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Home"); // opens Home.jsx
  };

  return (
    <div>
      <h1>Healthcare simplified for you...</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <p>Book your appointment today!</p>
    </div>
  );
}

export default App;