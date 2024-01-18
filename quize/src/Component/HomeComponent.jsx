import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Component.css';



export default class HomeComponent extends Component {
 constructor(props) {
   super(props)
   this.state = {
    
  }
 }



 
  render() {
    return (
    <div id="Elements">
      <h3 className='QuizApp_Name'>Quiz App</h3>
      <Link to='/quiz'><button id='button'>Play</button></Link>
    </div>
    )
  }
}
  