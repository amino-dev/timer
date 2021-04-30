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

import React, { useState, useEffect } from 'react';
function Timer(){

    const number = /^[+-]?\d*(?:[.,]\d*)?$/

    const [input,setInput] = useState(null)    
    const [display,setDisplay] = useState(false)
    const [isActive, setIsActive] = useState(false);

    function getInput(event){
        if (number.test(event.target.value))
            setInput(event.target.value)
        else 
        alert("Enter a number please!!")
      }
  
      function reset(){
        setInput(null)
        {
         let time = document.querySelector(".input")
         time.value = ""
        }
      }
  
      function toggle() {
        setIsActive(!isActive);
      }
  
      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setInput(input => Math.ceil( (input % (3600)) % 60) + 1,
            )
          }, 1000)
        } else if (!isActive && Math.ceil( (input % (3600)) % 60) !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, Math.ceil( (input % (3600)) % 60)]);
      
    
  /*
    function start() {
      setInterval(
        ()=> {
          let seconds =  Math.ceil( (input % (3600)) % 60)
          setInput({
          input   : seconds + 1
            })
        },1000
    )
    } */
 let hours = Math.floor(input / 3600)
 let minutes =  Math.floor((input % (3600)) / 60)
 let seconds =  Math.ceil( (input % (3600)) % 60)
    return (
    <div>
      <h1 className="title">Timer</h1>
        <div className="timer">
          <input className="input" type="text" placeholder="Enter a number" onChange={getInput}/>
          <button className="button" onClick={() => setDisplay(true)}>Convert</button>
           {display ? <p>
             {
               <div className="time">
                  <p>{hours} h : {minutes} min : {seconds} sec</p>      
               </div>    
             }
          </p> :null}
          </div >
          <div className="buttons">
          <button className="button" onClick={() => reset()} >Reset</button>
           <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
          </button> 
           {/* <button className="button" onClick={() => start()} >Start</button> */}
          {/* <button className="button" onClick={() => pause()} >Pause</button>  */}
          
        </div>

       
      {/* <button className="button" onClick={() => setDisplay(false)} >Reset</button>
      {display ? <p>
           {null} 
      </p> :
      <div className="time">
           {document.querySelector(".input").value = ""}
          <p>0 h : 0 min : 0 sec</p> 
      </div>   
      } */}
    </div>
)}
export default Timer


  