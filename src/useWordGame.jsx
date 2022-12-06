import { useState, useRef, useEffect } from "react";

function useWordGame(startingTime = 5) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [count, setCount] = useState(0);
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function calculateWordCount(input) {
    const wordsArr = input.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);

    setTimeRemaining(startingTime);
    setText("");
    setCount(0);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setCount(calculateWordCount(text));
  }

  return {
    textBoxRef,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    count,
    handleChange,
  };
}

export default useWordGame;
