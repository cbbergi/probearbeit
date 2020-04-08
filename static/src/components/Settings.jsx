import React, { Component } from 'react';
import request from '../requestUtilities';

export default class Settings extends Component {
  constructor(props){
      super(props);

      this._getData = this._getData.bind(this);

      this.state = {
        name: "Name",
        birthday: "XXXX-XX-XX",
        email: "E-Mail"
      }
  }

  componentDidMount(){
    this._getData();
  }

  async _getData(){
    try{

      const response = await request.fetchData(this.props.accessToken, "http://localhost/api/profil");
      this.setState({name: response.name, birthday: response.birthday, email: response.email});
    }catch(err){

      console.log(err);
    }
  }
  
  render(){

      return (
          <div>
            <h1>Settings</h1>
            <p>Name: {this.state.name}</p>
            <p>Geburtstag: {this.state.birthday}</p>
            <p>E-Mail: {this.state.email}</p>
          </div>
      );
  }
}