import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Settings from "./Settings";
import LogoutButton from "./LogoutButton";

export default class App extends Component {
    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            loggedIn: false,
            accessToken: ""
        };
    }

    handleLogin(loginState, accessToken = ""){

        this.setState({loggedIn: loginState, accessToken: accessToken});
    }

    render(){

        if(this.state.loggedIn){

            return (
                <Router>
                    <div>

                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                        </ul>
                        <LogoutButton handleLogin={this.handleLogin} />

                        <Switch>
                            <Route path="/settings">
                                <Settings accessToken={this.state.accessToken} />
                            </Route>
                            <Route path="/">
                                <Home accessToken={this.state.accessToken} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        }
        else{

            return (
                <Router>
                    <div>

                        <ul>
                            <li>
                                <Link to="/">Login</Link>
                            </li>
                            <li>
                                <Link to="/registration">Registration</Link>
                            </li>
                        </ul>

                        <Switch>
                            <Route path="/registration">
                                <Registration />
                            </Route>
                            <Route path="/">
                                <Login handleLogin={this.handleLogin} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        }
    }
}