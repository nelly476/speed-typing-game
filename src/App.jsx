import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
