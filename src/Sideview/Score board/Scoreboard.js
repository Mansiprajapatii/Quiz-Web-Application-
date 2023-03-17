import "./Scoreboard.css";

const Scoreboard = (props) => {

return(

   <>
   <div className='score-board'>
      <h1 className='s-heading'>Your Score</h1><br></br>
      <h1 className='score'>{props.scoreval}</h1>
     <h2 className='s-text'>{props.scoreval >= 5 ? (<h2> Great job !</h2>) : (<h2> Nice try !</h2>)}</h2>
     </div>
   
   </>
    
); 
} 
export default Scoreboard ;