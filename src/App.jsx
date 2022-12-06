import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useWordGame from "./useWordGame";

function App() {
  const {
    textBoxRef,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    count,
    handleChange,
  } = useWordGame();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining} </h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {count}</h1>
    </div>
  );
}

export default App;
