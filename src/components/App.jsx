import '../styles/App.css';
import React from "react";
import Timer from "./Timer";
import {motion} from 'framer-motion';

function App() {
  return (
    <div className="App">
      <motion.h1 
      initial = {{
        y: '-50vh'
      }}
      animate = {{
        y: 0
      }}

      >Timer</motion.h1>
      {// initial time is given in minutes
      }
      <Timer initialTime = {5}></Timer>
    </div>
  );
}

export default App;
