import React, { Component } from 'react'
import './Component.css';
import quizQuestion from "./resources/quizQuestion.json";
import ResultComponent from './ResultComponent';
import App from '../App';
import {Link} from 'react-router-dom'

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
    current_quest_index: 0, 
    
    } 

  this.quest = null;
}


number = ()=>{

}

handleOptionClick = (option) => {
  const correctAnswer = quizQuestion[this.state.current_quest_index][option];
  correctAnswer  === quizQuestion[this.state.current_quest_index].answer
  ? (alert("Correct Answer!"),
  this.props.updateScore(), this.props.updateAttemptQuiz()
  )
  : (alert("Wrong Answer! Moving to next question."),this.props.updateWrong())
  this.nextQuestion(),this.props.updateAttemptQuiz()
 
}




nextQuestion = () => {

  if (this.state.current_quest_index < 14) {
    this.setState(prevState => ({
      current_quest_index: prevState.current_quest_index + 1
    }))
  }
 }





 previousQuestion = () => {
  if (this.state.current_quest_index > 0) {
    this.setState(prevState => ({current_quest_index: prevState.current_quest_index - 1 }));
  }
 }




 render() {
   const quest = quizQuestion[this.state.current_quest_index];
   
   if (!quest) {
     return <div>Loading question...</div>;
   }

 
  
   return (
    <>
     <div id="QuestionBox">
       <div className="TopElements">
     
         <h2 id='title'> Question</h2>
         <div id="QuestionNumber" className="QuestionNumber">
           <div id="Current_Question_Number">{this.state.current_quest_index + 1}</div>
           <div>of</div>
           <div id="Total_Question">{quizQuestion.length}</div>
         </div>
         <div><p id="Questions">{quest.question}</p></div>
       </div>
        <div id="Option" className="Option">
          <div><button id="option1" onClick={() => this.handleOptionClick('optionA')}>{quest.optionA}</button></div>
          <div><button id="option2" onClick={() => this.handleOptionClick('optionB')}>{quest.optionB}</button></div>
          <div><button id="option3" onClick={() => this.handleOptionClick('optionC')}>{quest.optionC}</button></div> 
          <div><button id="option4" onClick={() => this.handleOptionClick('optionD')}>{quest.optionD}</button></div>
        </div>
         <div id="Question_Button" className="Question_Button">
           <button id="Previous_Button" onClick={this.previousQuestion}>Previous</button>
           <button id="Next_Button" onClick={this.nextQuestion}>Next</button>
           <button id='Quit_Button'> <Link to='/result'>Quit</Link></button>
         </div> 
       </div> 
    </>
   )
  }
}