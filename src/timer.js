/*
import React from 'react'
import ReactDOM from 'react-dom'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <input type="text" ref={this.input} />
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    ReactDOM.render(
        <Timer />,
        document.getElementById('root')
      )
export default Timer*/

import React, { useState } from 'react'
function Timer(){
    const number = /^[+-]?\d*(?:[.,]\d*)?$/
    
    const [input,setInput] = useState(null)    
    const [display,setDisplay] = useState(false)
    
    function getInput(event){
        if (number.test(event.target.value))
            setInput(event.target.value)
        else 
            alert("Enter a number please!!")
        
    }

    return (
    <div>
    <h1 className="title">Timer</h1>
    <div className="timer">
        <input className="input" type="text" placeholder="Enter a number" onChange={getInput}/>
        <button className="button" onClick={() => setDisplay(true)}>Convert</button>
    </div>
    {display ? <p>
        {
            <div className="time">
                 <p>{Math.floor(input / 3600)} h : {Math.floor((input  % 3600) / 60)} min : {input % 60 } sec</p>      
            </div>    
        }
        </p> :null}
    </div>
)
}
export default Timer


  