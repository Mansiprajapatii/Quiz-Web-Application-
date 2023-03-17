import React, { useState, useEffect, state} from "react";
import { useNavigate} from 'react-router-dom';
import QuizData from "./QuizData";
import Scoreboard from "../Sideview/Score board/Scoreboard";
import "./Quizapp.css";
import { database } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import CountdownTimer from "../Sideview/CountdownTimer/CountdownTimer";

function QuizMain(props) {

  const navigate = useNavigate();
  const [currentq, setCurrentq] = useState(0);
  const [totalQue , settotalQue] = useState(0);
  const [currentcheck,setcheck] = useState("NIL") ;
  const [currscore,setscore] = useState(0) ;
  const [final, setfinal] = useState(0);
  const [show,setshow] = useState(false) ;

  const databaseRef = collection( database , 'Score');

  let val =0;

  // useEffect( () => {
  //   const {final} = state;
  //   setfinal(final);
  // })

  const backQuebtn = () => {

    if(currentq > 0){
     setCurrentq(currentq-1);
  }
} 
 
  const nextQuebtn = () => {
    if (currentq === QuizData.length - 2) {
      console.log("Last Question");
    }
    if(currentcheck==QuizData[currentq].correct){
      setscore(currscore+1) ;  
    }
    setCurrentq(currentq + 1);
  };

  // Started: JUn 20 3.00PM
  // Modidication: Adding Camera and Joining it with Server
  // Completed: JUn 20 17.46
  // Modification Made: Camera was settled
  // Timig: Jun 20 18:10
  // Modification 2 :
  // Timing:
  // Name: Krushabhsingh Suryawanshi
  // Modification 3: separating quiz question part and side camera part 
//  name : mansi prajapati 
  // timing: june 22  2:00pm

  
const onCheck = (e)=>{
  setcheck(currcheck => e.target.value) ;
};
    const showScore = () => {
     
      if(currentcheck==QuizData[currentq].correct){
        setscore(currscore+1) ; 
        console.log(currscore) ;
      }
      setfinal(currscore);
      console.log(final);
      setshow(true);
      addDoc(databaseRef, { score: currscore });
    };
   
  const Affunc = (props) => {
    return (
      <>
        <h3 className="current-question">
          Question {props.srno}/{QuizData.length}
        </h3>
        <h2 className="qestion">
          {props.srno}. {props.question}{" "}
        </h2>
        <ul className="ullist">
          <li>
            <input type="radio" name="option" value={props.option1} id="a" className="ansList" onChange={onCheck}/>
            <label htmlFor="a" className="ansa">
              {props.option1}
            </label>
          </li>
          <li>
            <input type="radio" name="option" id="b" value={props.option2} className="ansList" onChange={onCheck} />
            <label htmlFor="b" className="ansb">
              {" "}
              {props.option2}
            </label>
          </li>
          <li>
            <input type="radio" name="option" id="c" value={props.option3} className="ansList" onChange={onCheck} />
            <label htmlFor="c" className="ansc">
              {props.option3}
            </label>
          </li>
          <li>
            <input type="radio" name="option" id="d" value={props.option4} className="ansList" onChange={onCheck} />
            <label htmlFor="d" className="ansd">
              {props.option4}{" "}
            </label>
          </li>
        </ul>

        <div className="footer-button">
          <button id="backBtn" onClick={backQuebtn} className="backBtn">Back</button>

          {(currentq<9)
         ? (<button id="nextBtn" onClick={nextQuebtn} className="nextBtn">
            next
          </button>)
          :(<button id="submit" onClick={showScore} className="submitBtn">
            submit
          </button>)
  }
      </div>
      </>
    );
  };

  return (
   <div className="quizapp d-flex">
        <div className="quize">
          {(show) ? <Scoreboard scoreval = {final} />  :
          <div className="question-bar">
          <Affunc
            question={QuizData[currentq].question}
            option1={QuizData[currentq].option1}
            option2={QuizData[currentq].option2}
            option3={QuizData[currentq].option3}
            option4={QuizData[currentq].option4}
            srno={currentq + 1}
          />
          </div>
          }

        </div>
        </div>      
   
  );
  }

export default QuizMain;
