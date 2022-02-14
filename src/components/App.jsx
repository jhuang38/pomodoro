import '../styles/App.css';
import React from "react";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <h1>Timer</h1>
      <Timer initialTime = {60}></Timer>
    </div>
  );
}

export default App;
