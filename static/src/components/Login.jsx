import React, { Component } from 'react';
import request from '../requestUtilities';

export default class Login extends Component {
  constructor(props){
      super(props);

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);

      this.state = {
        email: "",
        password: ""
      }
  }

  _handleChange(event){

    this.setState({[event.target.name]: event.target.value});
  }

  async _handleSubmit() {
    try{

      const response = await request.postData("http://localhost/api/login", this.state);
      response.loggedIn? this.props.handleLogin(response.loggedIn, response.accessToken) : this.props.handleLogin(response.loggedIn);
    }catch(err){
      
      console.log(err);
    }
    
  }

  render(){

      return (
          <div>
            <h1>Login</h1>
            <form onSubmit={this._handleSubmit}>
              <label>
                E-Mail:
                <input name="email" type="email" value={this.state.email} onChange={this._handleChange} />
              </label>
              <br />
              <br />
              <label>
                Passwort:
                <input name="password" type="password" value={this.state.password} onChange={this._handleChange} />
              </label>
              <br />
              <br />
              <input type="button" value="Submit" onClick={this._handleSubmit} />
            </form>
          </div>
      );
  }
}