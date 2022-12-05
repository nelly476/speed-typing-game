import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [timeRemaining]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function calculateWordCount(input) {
    const wordsArr = input.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining} </h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
