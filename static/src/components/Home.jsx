import React, { Component } from 'react';
import request from '../requestUtilities';

export default class Home extends Component {
  constructor(props){
      super(props);

      this._getData = this._getData.bind(this);

      this.state = {
        name: "User"
      }
  }

  componentDidMount(){
    this._getData();
  }

  async _getData(){
    try{

      const response = await request.fetchData(this.props.accessToken, "http://localhost/api/profil");
      this.setState({name: response.name});
    }catch(err){

      console.log(err);
    }
  }
  
  render(){

      return (
          <div>
              <h1>Home</h1>
              <p>Willkommen {this.state.name}!</p>
          </div>
      );
  }
}