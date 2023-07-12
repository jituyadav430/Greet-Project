import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        password:"password",
        val:"Show Password",
        flag:true,
        col:"green",
        btnClasses:["btn","mx-2"]
      }
    }
    click=()=>{
       if(this.state.flag===true){
        this.setState({password:"text" ,val:"Hide Password",flag:!this.state.flag});
       this.state.btnClasses.push("btn-danger");
       }else{
        this.setState({password:"password" ,val:"Show Password",flag:!this.state.flag});
        this.state.btnClasses.push("btn-success");
       }
    }
  
  render() {
    console.log(this.state.btnClasses.join(" "));
    return (
        <div>
        <form className="form-group" onSubmit={this.props.submit}>
            <label>Name:</label>
            <input name="name" type="text" className="form-control" required/><br/><br/>
            <label>Email:</label>
            <input type="email" className="form-control" name="email"required/><br/><br/>
            <label>Password:</label>
            <input type={this.state.password} className="form-control" name="pass"required/><br/><br/>
            <button type="submit" className='btn btn-primary mx-2'>Register</button>
            <button type="button" onClick={this.click} className={this.state.btnClasses.join(" ")} style={{color:"black" }} >{this.state.val}</button>
        </form>
       
    </div>
    )
  }
}

export default Register;
