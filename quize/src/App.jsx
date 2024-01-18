import React, { Component } from "react";
import Quiz from './Component/Quiz';
import ResultComponent from "./Component/ResultComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeComponent from './Component/HomeComponent';
import quizQuestion from "./Component/resources/quizQuestion.json";

export default class App extends Component {
  constructor(props) {
  super(props)
 
  this.state = {
    score: 0,
    attemptQuiz: 0,
    updateWrong: 0,
  }
  }
 
  updateScore = () => {
  this.setState({ score: this.state.score + 1 })
  }
 
  updateAttemptQuiz = () => {
    this.setState({ attemptQuiz: this.state.attemptQuiz + 1 })
   }
 
  updateWrong = () => {
  this.setState({ updateWrong: this.state.updateWrong + 1 })
  }
 
  render() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<Quiz updateScore={this.updateScore}  updateAttemptQuiz={this. updateAttemptQuiz} updateWrong={this.updateWrong} />} />
        <Route path="/result" element={<ResultComponent score={this.state.score} attemptQuiz={this.state.attemptQuiz} updateWrong={this.state.updateWrong} quizQuestion={quizQuestion} />} />
      </Routes>
    </div>
  );
  }
 }