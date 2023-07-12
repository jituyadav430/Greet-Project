import React, { Component } from 'react'
import Greeting from './Greeting';
import Register from './Register';

export class App1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:null,
        email:null,
        pass:null,
         isReg:false,
      }
    }
    submitHandler=(event)=>{
        event.preventDefault();
     
        const name=event.target.name.value;
        const email=event.target.email.value;
        const pass=event.target.pass.value;
         this.setState({name,email,pass,isReg:true})
        
    }
  render() {
    return (
      <div>
        {this.state.isReg?<Greeting name={this.state.name} email={this.state.email}/>:<Register submit={this.submitHandler}/>}
      </div>
    )
  }
}

export default App1;