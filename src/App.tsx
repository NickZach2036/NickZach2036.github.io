import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#242424",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: "grid",
        gridTemplateRows: "auto auto auto",
        gridTemplateColumns: "auto auto auto",
      }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button
            onClick={() => navigate("/message")}
            style={{ marginLeft: "1rem" }}
          >
            Go to Станция+ Page
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
