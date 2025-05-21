import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (intervalId) return;

    const id = setInterval(() => {
      setTimer((prev) => {
        let { minutes, seconds } = prev;
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        return { minutes, seconds };
      });
    }, 1000);

    setIntervalId(id);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimer({ minutes: 0, seconds: 0 });
  };
  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time: {String(timer.minutes).padStart(2, "0")}:
        {String(timer.seconds).padStart(2, "0")}
      </p>
      {intervalId ? (
        <button onClick={stopTimer}>Stop</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;
