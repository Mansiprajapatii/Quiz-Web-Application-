import React from "react";
import { useState } from "react";
import "./App.css";
import Quiz from "./QuizPage/QuizMain";
import Sideview from "./Sideview/Sideview";
import CountdownTimer from "./Sideview/CountdownTimer/CountdownTimer";
// import { app } from "./firebaseConfig";

function App() {
  const [autosubmit, setautosubmit] = useState(false);
  const time = new Date().getTime() + 120000; //set for 2 min

  return (
    <div className="App">
      <div className="main-content">
        <div className="left">
          <Quiz />
        </div>
        <div className="right">
          <CountdownTimer countdownTimestampMs={time} />
          <Sideview />
        </div>
      </div>
    </div>
  );
}

export default App;
