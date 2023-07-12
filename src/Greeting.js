import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div>
        <h3>welcome {this.props.name} you are register now <br/> and we have sent a message<br/> to your email {this.props.email}</h3>
      </div>
    )
  }
}

export default Greeting