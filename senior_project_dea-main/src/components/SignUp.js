import React, { Component } from 'react'
import './LoginAndSignUp.css';
import LoginBanner from './LoginBanner';
import gator from '../images/gator.png';

export default class SignUp extends Component {
  constructor(props){
    super (props)
    this.state={
      fname:"",
      lname:"",
      email:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{fname, lname, email, password} = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      mode: 'no-cors',
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        lname,
        email,
        password
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister");
      if(data.status=="ok"){
        alert("Registration was successful");
        window.location.href="./sign-in"
      }
    })
  }
  render() {
    return (
      <div>
        <LoginBanner/>
        <br/>
        <img className="gator-image" src={gator}  />
        <form onSubmit={this.handleSubmit}>
          <h3 className='title-name'>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name..."
              onChange={e=>this.setState({fname:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Enter last name..." onChange={e=>this.setState({lname:e.target.value})}/>
          </div>

          <div className="mb-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email..."
              onChange={e=>this.setState({email:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password..."
              onChange={e=>this.setState({password:e.target.value})}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered? <a href="/sign-in">Sign in!</a>
          </p>
        </form>
      </div>
    )
  }
}