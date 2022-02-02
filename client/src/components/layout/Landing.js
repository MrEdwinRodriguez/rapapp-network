import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './../../images/logo.png'

export const Landing = () => {
    return (
        <div className="login pull-right landing">
            <div className="login-screen">
                <div className="app-title">
                <img src={logo} alt="Logo" width="100px" height="200px" className="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Landing
