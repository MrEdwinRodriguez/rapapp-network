import React, {Fragment} from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

export const Navbar = () => {
    const guestLinks = (
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
      );
    return (
        <nav className="navbar bg-dark">
        <Fragment>{guestLinks}</Fragment>
      </nav>
    )
}

export default Navbar