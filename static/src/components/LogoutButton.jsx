import React from 'react';

export default function LogoutButton(props){

    const logout = () =>{

        props.handleLogin(false);
    }

    return (
        <button className="logoutButton" onClick={logout}>Logout</button>
    );
}