import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";
import QuizMain from "../../QuizPage/QuizMain";
import Scoreboard from "../Score board/Scoreboard";

// const [Showscore,setScore] = useState(QuizMain.showScore)
const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
    updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  
  return (
     
    <div className="countdown-timer">
        { (remainingTime.hours === "00" && remainingTime.minutes === "00" && remainingTime.seconds === "00") ? (<h2 className="time-text">Time's up</h2>) : 
       <div>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>:</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>:</span>
      <span className="two-numbers">{remainingTime.seconds}</span> 
      </div> }
       
       <div className="auto-submit">

        {
          (remainingTime.hours === "00" && remainingTime.minutes === "00" && remainingTime.seconds === "00") ? <Scoreboard/> : <h2>hello</h2>
        }
       </div>



    </div> 
   
  );
};

export default CountdownTimer;
