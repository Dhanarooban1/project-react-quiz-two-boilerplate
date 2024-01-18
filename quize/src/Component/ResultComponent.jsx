import React, { Component } from 'react'
import './Component.css';
import Quiz from './Quiz';
import App from '../App';
import {Link} from 'react-router-dom'
import quizQuestion from "./resources/quizQuestion.json";
export default class ResultComponent extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
     totalQuestions: quizQuestion.length,
    
   }
 }





  render() {
    const {score,attemptQuiz,updateWrong ,quizQuestion}=this.props
    let percentage = Math.floor((score / quizQuestion.length) * 100);

    return (
    <>
    <h1>Result</h1>
    <div id="ResultBox">
      
        <div className="Result_Top_text">
        <h3 id='DisplayFeedback'> You need more practice!</h3>
        <h2 id='Your_Score'>Your Score is {percentage}</h2>
        </div>
        <div id='QuestionFeedback'>
           <div className='q' id='Total_Number_of_question'>
            <p>Total Number of question:</p>
            <p>{quizQuestion.length}</p>
           </div>
           <div className='q' id= 'Number of attempted questions'>
            <p>Number of attempted questions:</p>
            <p>{attemptQuiz}</p>
           </div>
           <div className='q' id='Number of corrected answers'>
            <p>Number of corrected answers:</p>
            <p>{score}</p>
           </div>
           <div className='q' id='Number of wrong answers'>
            <p>Number of wrong answers</p>
            <p>{updateWrong}</p>
           </div>
        </div>
    </div> 
    <div id = "buttons">
            <button id='playAgainBtn'><Link to='/quiz'>Play Again </Link></button>
            <button id='backBtn' ><Link to='/'>Back to home</Link></button>
           
    </div>
    </> 
    )
  }  
}
