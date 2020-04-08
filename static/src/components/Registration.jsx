import React, { Component } from 'react';
import request from '../requestUtilities';

export default class Registration extends Component {
  constructor(props){
      super(props);

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);

      this.state = {
        name: "",
        birthday: "",
        email: "",
        password: ""

      }

  }

  _handleChange(event){
    
    this.setState({[event.target.name]: event.target.value});
  }

  async _handleSubmit(event) {

    try{

      const response = await request.postData("http://localhost/api/registration", this.state);
    }catch(err){
      console.log(err);
    }
  }
  
  render(){

      return (
          <div>
            <h1>Registration</h1>
            <form onSubmit={this._handleSubmit}>
              <label>
                Benutzername:
                <input name="name" type="text" value={this.state.name} onChange={this._handleChange} />
              </label>
              <br />
              <br />
              <label>
                Geburtstag:
                <input name="birthday" type="date" value={this.state.birthday} onChange={this._handleChange} />
              </label>
              <br />
              <br />
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
              <input type="button" value="Submit" onClick={this._handleSubmit}/>
            </form>
          </div>
      );
  }
}