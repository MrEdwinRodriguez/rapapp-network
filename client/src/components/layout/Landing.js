import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export const Landing = () => {
    return (
        <div className="login pull-right landing">
            <div className="login-screen">
                <div className="app-title">
                    <h1>SPIT BARS</h1>
                </div>
                <form>
                    <div class="login-form" >
                        <div class="control-group">
                            <input type="text" class="login-field" value="" placeholder="email" id="user_email" name='user_email' required />
                            <label class="login-field-icon fui-user" for="login-name"></label>
                        </div>
                        <div class="control-group">
                            <input type="password" class="login-field" value="" placeholder="password" id="user_email" name='user_password' required />
                            <label class="login-field-icon fui-user" for="login-password"></label>
                        </div>
                    </div>
                </form>
                <div className='Buttons'>
                    <Link to="register" className="btn btn-primary">Sign Up</Link>
                    <Link to="login" className="btn btn-light">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
